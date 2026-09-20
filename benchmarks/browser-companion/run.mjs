// Explicit live diagnostic. No live inference in npm test or CI.
import {readFile,writeFile,mkdir,access} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {createServer} from 'node:http';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
const moduleName=process.env.SYSONE_CLIENT_ROOT?pathToFileURL(resolve(process.env.SYSONE_CLIENT_ROOT,'dist/computer/index.js')).href:'sysone/computer';
const {BrowserSession,runComputer}=await import(moduleName);
const clientModule=process.env.SYSONE_CLIENT_ROOT?pathToFileURL(resolve(process.env.SYSONE_CLIENT_ROOT,'dist/client.js')).href:'sysone/client';
const {createClient}=await import(clientModule);
const connection=JSON.parse(await readFile(process.env.SYSONE_CONNECTION,'utf8'));
const client=createClient(connection);
const source=await readFile(new URL('fixture.html',import.meta.url)),caseBytes=await readFile(new URL('cases.json',import.meta.url)),cases=JSON.parse(caseBytes);
const hash=b=>createHash('sha256').update(b).digest('hex');
const output=resolve(process.env.SYSONE_BENCH_OUTPUT||`findings/browser-companion/run-${Date.now()}.json`);
try{await access(output);throw Error('Output already exists. Choose a new run path.');}catch(e){if(e.code!=='ENOENT')throw e;}
const evidence={at:new Date().toISOString(),type:'first-party development diagnostic',provider:'Vercel AI Gateway through System One Cloud',model:'typesafe-ai/jev',clientRevision:process.env.SYSONE_CLIENT_ROOT?execFileSync('git',['rev-parse','HEAD'],{cwd:process.env.SYSONE_CLIENT_ROOT,encoding:'utf8'}).trim():'sysone@0.6.0',casesSha256:hash(caseBytes),fixtureSha256:hash(source),method:'Six original form tasks, one attempt per arm per case. Alternating order. Fresh browser per attempt. Task clock includes observation, Jev calls, actions, final screenshot and server-record verification; browser startup/navigation excluded. Baseline uses exact known fixture IDs and skips already matching fields. No host-agent reasoning or final visual review is timed. Model prompts are unchanged after this first run.',runs:[]};
let saved=null,writes=0;
const http=createServer(async(req,res)=>{if(req.method==='POST'&&req.url==='/save'){let body='';for await(const part of req)body+=part;if(body.length>8192){res.writeHead(413);res.end();return;}saved=JSON.parse(body);writes++;res.setHeader('content-type','application/json');res.end('{"ok":true}');return;}res.setHeader('content-type','text/html');res.end(source);});
await new Promise(r=>http.listen(0,'127.0.0.1',r));
const url=`http://127.0.0.1:${http.address().port}`;
const imageDir=resolve(output+'.screens');await mkdir(imageDir,{recursive:true});await mkdir(resolve(output,'..'),{recursive:true});
try{
 for(const [index,c] of cases.entries())for(const arm of index%2?['jev','deterministic']:['deterministic','jev']){
  const session=new BrowserSession({headless:true});saved=null;writes=0;
  const row={case:c.id,arm,expected:{name:c.name,mode:c.mode}};evidence.runs.push(row);
  try{
   const setup=performance.now();await session.start(url+'/?'+new URLSearchParams({initial:c.initial,mode:c.initialMode}));row.setupMs=Math.round(performance.now()-setup);const start=performance.now();
   if(arm==='jev'){
    const result=await runComputer(session,client,{goal:c.goal,maxSteps:7,minimumProbability:.8,allowedOperations:['type','select','click','wait'],fields:[{name:'Project name',text:c.name}],selections:[{name:'Mode',option:c.mode}]});
    const {final,...trace}=result;row.trace=trace;row.finalText=final?.screen.text;
    if(final?.image)await writeFile(resolve(imageDir,c.id+'.jpg'),Buffer.from(final.image,'base64'));
   }else{
    // The benchmark owns the fixture. This is an exact known-script baseline,
    // not a model or a claimed general-purpose browser agent.
    await session.page.evaluate(({name,mode})=>{const n=document.querySelector('#name'),m=document.querySelector('#mode');if(n.value!==name)n.value=name;if(m.value!==mode)m.value=mode;document.querySelector('#save').click();},{name:c.name,mode:c.mode});
    await new Promise(r=>setTimeout(r,80));await session.observe(true);
   }
   row.saved=saved;row.writes=writes;row.passed=JSON.stringify(saved)===JSON.stringify(row.expected)&&writes===1;row.wallMs=Math.round(performance.now()-start);
  }catch(error){row.error=error instanceof Error?error.message:'Failed';row.passed=false;}finally{await session.close();await writeFile(output,JSON.stringify(evidence,null,2)+'\n');}
  console.log(JSON.stringify({case:row.case,arm,passed:row.passed,wallMs:row.wallMs,stop:row.trace?.stop,error:row.error}));
 }
}finally{await new Promise(r=>http.close(r));await writeFile(output,JSON.stringify(evidence,null,2)+'\n');}
