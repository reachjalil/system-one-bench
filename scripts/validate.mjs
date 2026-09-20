import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const records=JSON.parse(await readFile(new URL('../catalog.json',import.meta.url),'utf8'));
const ids=new Set();
for(const r of records){
 assert.match(r.id,/^[a-z0-9-]+$/);assert(!ids.has(r.id),`Duplicate ${r.id}`);ids.add(r.id);
 for(const k of ['title','status','kind','affiliation','reviewed','workload','method','baseline','finding','limitations','implication'])assert(typeof r[k]==='string'&&r[k].length>3,`${r.id}: missing ${k}`);
 assert(['reported','reproduced','first-party','reference'].includes(r.status));
 assert.match(r.reviewed,/^\d{4}-\d{2}-\d{2}$/);
 assert(r.sources.length>0);for(const s of r.sources){assert(new URL(s.url).protocol==='https:');assert(s.label);}
 assert(Array.isArray(r.metrics));assert(Array.isArray(r.patterns));
 if(r.repo)assert.match(r.revision,/^[a-f0-9]{40}$/);
 if(Date.now()-Date.parse(r.reviewed)>30*86400000)console.warn(`REVIEW DUE ${r.id}`);
}
console.log(`Validated ${records.length} evidence records. No provider calls.`);
