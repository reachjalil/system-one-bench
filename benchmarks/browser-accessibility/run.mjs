import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createServer} from 'node:http';
import {pathToFileURL} from 'node:url';
import {resolve,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
const root=process.env.SYSONE_CLIENT_ROOT;
const {BrowserSession,adviseComputer,computerQuestions}=await import(root?pathToFileURL(resolve(root,'dist/computer/index.js')).href:'sysone/computer');
const {createClient}=await import(root?pathToFileURL(resolve(root,'dist/client.js')).href:'sysone/client');
const connection=JSON.parse(await readFile(process.env.SYSONE_CONNECTION,'utf8'));
const source=await readFile(new URL('fixture.html',import.meta.url)),caseBytes=await readFile(new URL('cases.json',import.meta.url)),cases=JSON.parse(caseBytes);
const hash=b=>createHash('sha256').update(b).digest('hex');
const output=resolve(process.env.SYSONE_BENCH_OUTPUT||`findings/browser-accessibility/run-${Date.now()}.json`);
try{await access(output);throw Error('Choose a new output path. Existing result will not be overwritten.');}catch(e){if(e.code!=='ENOENT')throw e;}
const evidence={at:new Date().toISOString(),type:'first-party single-decision development diagnostic',provider:'Vercel AI Gateway through System One Cloud',model:'typesafe-ai/jev',clientRevision:root?execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim():null,casesSha256:hash(caseBytes),fixtureSha256:hash(source),method:'Six original cases, one attempt each, no retries or actions. Expected target bound to a fixture-only data-test marker omitted from the model input. Known marker and labeled operation are the deterministic reference. No main-agent baseline or completion claim.',runs:[]};
const server=createServer((req,res)=>{res.setHeader('content-type','text/html');res.end(source)});await new Promise(r=>server.listen(0,'127.0.0.1',r));await mkdir(dirname(output),{recursive:true});
try{for(const c of cases){const session=new BrowserSession({headless:true});const row={case:c.id,expected:{operation:c.operation,target:c.target}};evidence.runs.push(row);try{
 await session.start(`http://127.0.0.1:${server.address().port}/?case=${c.id}`);
 const t=performance.now();const o=await session.observe(false);row.observationMs=performance.now()-t;
 // This is the fixture-only oracle; the attribute is never added to the observation.
 const oracle=await session.cdp.send('Runtime.callFunctionOn',{objectId:session.observation.objectId,functionDeclaration:'function(){return this.nodes.map((n,i)=>({id:this.snapshot.controls[i].id,marker:n.getAttribute("data-test")}));}',returnByValue:true});
 const expectedId=c.target?oracle.result.value.find(n=>n.marker===c.target)?.id:null;
 if(c.target&&!expectedId)throw Error('Fixture target was not observed.');
 row.expectedId=expectedId;row.screen=o.screen;row.input=computerQuestions(o.screen,c.goal,[]);row.inputBytes=Buffer.byteLength(JSON.stringify(row.input));
 const advice=await adviseComputer(session,createClient(connection),o.observationId,c.goal);row.advice=advice;
 const p=advice.proposal;row.passed=p?.operation===c.operation&&(c.target?p?.target===expectedId:!p?.target);
 const answers=advice.engine.result?.answers;row.operationProbability=answers?.operation?.probabilities?.[p?.operation]??null;row.targetProbability=p?.target?answers?.[p.operation+'_target']?.probabilities?.[p.target]??null:row.operationProbability;
 row.aboveThreshold=[row.operationProbability,row.targetProbability].every(x=>typeof x==='number'&&x>=.8);row.deterministicReferencePassed=true;
}catch(error){row.error=error instanceof Error?error.message:'Failed';row.passed=false;}finally{await session.close();await writeFile(output,JSON.stringify(evidence,null,2)+'\n');}console.log(JSON.stringify({case:row.case,passed:row.passed,aboveThreshold:row.aboveThreshold,error:row.error}));}}
finally{await new Promise(r=>server.close(r));await writeFile(output,JSON.stringify(evidence,null,2)+'\n');}
