import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {experimental_evaluate as evaluate} from 'ai';
import {createGateway} from '@ai-sdk/gateway';
if(!process.env.AI_GATEWAY_API_KEY)throw Error('Set AI_GATEWAY_API_KEY in the environment. Never commit it.');
const source=await readFile(new URL('./cases.json',import.meta.url));
const cases=JSON.parse(source);
const questions={supported:{type:'boolean',instructions:'Is the entire claim established by the supplied tool evidence? Plans and missing observations do not count as evidence.'},contradicted:{type:'boolean',instructions:'Does the supplied tool evidence explicitly show the claim is false? Mere absence of confirming evidence is not an explicit contradiction.'}};
const model='typesafe-ai/jev';
const gateway=createGateway({apiKey:process.env.AI_GATEWAY_API_KEY});
const observations=[];
for(const [index,c] of cases.entries()){
 for(const mode of index%2?['separate','batch']:['batch','separate']){
  const started=performance.now(),answers={},receipts=[];
  for(const q of mode==='batch'?[questions]:Object.entries(questions).map(([id,v])=>({[id]:v}))){
   const t=performance.now();
   try{const result=await evaluate({model:gateway.evaluation(model),state:c.state,questions:q,maxRetries:0,abortSignal:AbortSignal.timeout(8000),providerOptions:{gateway:{zeroDataRetention:true}}});
    Object.assign(answers,result.answers);receipts.push({ok:true,latencyMs:Math.round(performance.now()-t),inputTokens:result.usage.inputTokens??null,outputTokens:result.usage.outputTokens??null});
   }catch{receipts.push({ok:false,latencyMs:Math.round(performance.now()-t),inputTokens:null,outputTokens:null});}
  }
  const scored=Object.entries(c.expected).map(([key,expected])=>{const p=answers[key]?.probability;return {key,expected,probability:p??null,actual:typeof p==='number'?p>=.5:null,correct:typeof p==='number'&&(p>=.5)===expected,review:typeof p!=='number'||(p>.2&&p<.8)};});
  observations.push({id:c.id,mode,elapsedMs:Math.round(performance.now()-started),receipts,scored});
 }
}
const percentile=(a,p)=>[...a].sort((a,b)=>a-b)[Math.ceil(a.length*p)-1]??null;
const summary=Object.fromEntries(['batch','separate'].map(mode=>{const rows=observations.filter(r=>r.mode===mode),scores=rows.flatMap(r=>r.scored),receipts=rows.flatMap(r=>r.receipts);return [mode,{correct:scores.filter(r=>r.correct).length,total:scores.length,review:scores.filter(r=>r.review).length,calls:receipts.length,failedCalls:receipts.filter(r=>!r.ok).length,inputTokens:receipts.reduce((n,r)=>n+(r.inputTokens??0),0),unreportedUsage:receipts.filter(r=>r.inputTokens===null).length,p50Ms:percentile(rows.map(r=>r.elapsedMs),.5),p95Ms:percentile(rows.map(r=>r.elapsedMs),.95)}];}));
const report={at:new Date().toISOString(),model,provider:'Vercel AI Gateway',node:process.version,corpusSha256:createHash('sha256').update(source).digest('hex'),questions,method:'12 authored evidence cases, 2 independent boolean questions; one batched request versus two sequential requests; alternating order; no retries or cache; SDK wall time. Labels written before first run. Synthetic diagnostic, not held-out production evaluation or host-agent savings measurement.',summary,observations};
const name=`results-${new Date().toISOString().replaceAll(':','-')}.json`;
await writeFile(new URL(name,import.meta.url),JSON.stringify(report,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({file:name,summary}));
