import {readFile} from 'node:fs/promises';
const rows=JSON.parse(await readFile(new URL('../catalog.json',import.meta.url),'utf8'));
let failures=0;
for(const r of rows.filter(x=>x.repo)){
 try{
  const response=await fetch(`https://api.github.com/repos/${r.repo}/commits/HEAD`,{headers:{Accept:'application/vnd.github+json',...(process.env.GITHUB_TOKEN?{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`}:{})},signal:AbortSignal.timeout(15000)});
  if(!response.ok)throw Error(`HTTP ${response.status}`);
  const {sha}=await response.json();console.log(`${sha===r.revision?'UNCHANGED':'REVIEW NEEDED'} ${r.id}: pinned ${r.revision.slice(0,10)}, current ${sha.slice(0,10)}`);
 }catch(e){failures++;console.log(`CHECK FAILED ${r.id}: ${e.message}`);}
}
process.exitCode=failures?1:0;
