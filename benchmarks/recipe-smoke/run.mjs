// Explicit live inference. No automatic retries. Requires a running System One 0.5+ engine.
import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const connectionPath=process.env.SYSONE_CONNECTION;
if(!connectionPath)throw Error('Set SYSONE_CONNECTION to a private scoped connection JSON file.');
const connection=JSON.parse(await readFile(connectionPath,'utf8'));
const origin=new URL(connection.url);
if(origin.username||origin.password||origin.pathname!=='/'||origin.search||origin.hash||!(origin.protocol==='https:'||(origin.protocol==='http:'&&['127.0.0.1','localhost','[::1]'].includes(origin.hostname))))throw Error('Use a loopback HTTP or HTTPS engine origin.');
const bytes=await readFile(new URL('./cases.json',import.meta.url));
const cases=JSON.parse(bytes);const rows=[];const startedAt=new Date().toISOString();
const output=new URL(`./results-${startedAt.replaceAll(':','-')}.json`,import.meta.url);
const base={startedAt,engineVersion:'0.5.0',model:'typesafe-ai/jev',provider:'Vercel AI Gateway',resolvedModelVersion:'Not exposed by the current engine receipt',casesSha256:createHash('sha256').update(bytes).digest('hex'),kind:'First-party authored synthetic smoke test, not a held-out benchmark',booleanDecisionThreshold:0.5,uncertaintyThreshold:0.8,baseline:'Author labels only; no comparator model or cost comparison',rows};
await writeFile(output,JSON.stringify(base,null,2)+'\n',{flag:'wx'});
for(const c of cases){
 const begin=performance.now();let row;
 try{
  const response=await fetch(new URL('/v1/patterns/run',origin),{method:'POST',headers:{Authorization:`Bearer ${connection.token}`,'Content-Type':'application/json'},body:JSON.stringify(c.request),redirect:'error',signal:AbortSignal.timeout(12000)});
  if(!response.ok){row={id:c.id,status:response.status,error:'Request failed; response body intentionally omitted'};}
  else {
   const result=await response.json();const answers=result.result.answers;
   const checks=Object.entries(c.expected).map(([question,expected])=>{
    const answer=answers[question];const actual=answer?.type==='boolean'?answer.probability>=0.5:answer?.choice;
    const certainty=answer?.type==='boolean'?Math.max(answer.probability,1-answer.probability):answer?.probabilities?.[answer.choice];
    return {question,expected,actual,correct:actual===expected,needsReview:certainty===undefined||certainty<0.8};
   });
   row={id:c.id,status:response.status,answers,meta:result.meta,checks,correct:checks.every(c=>c.correct)};
  }
 }catch{row={id:c.id,error:'Transport failed; no retry'};}
 row.endToEndMs=Math.round(performance.now()-begin);rows.push(row);
 await writeFile(output,JSON.stringify(base,null,2)+'\n');
 console.log(`${c.id}: ${row.correct===undefined?'error':row.correct?'matched labels':'label mismatch'}`);
}
console.log(JSON.stringify({cases:rows.length,matched:rows.filter(r=>r.correct).length,errors:rows.filter(r=>r.error).length,output:output.pathname}));
