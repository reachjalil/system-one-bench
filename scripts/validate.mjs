import assert from 'node:assert/strict';
import {readFile, readdir, access} from 'node:fs/promises';
import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const records=JSON.parse(await readFile(new URL('../catalog.json',import.meta.url),'utf8'));
const ids=new Set();
for(const r of records){
 assert.match(r.id,/^[a-z0-9-]+$/);assert(!ids.has(r.id),`Duplicate ${r.id}`);ids.add(r.id);
 for(const k of ['title','status','kind','affiliation','reviewed','workload','method','baseline','finding','limitations','implication'])assert(typeof r[k]==='string'&&r[k].length>3,`${r.id}: missing ${k}`);
 assert(['reported','reproduced','first-party','reference','anecdotal'].includes(r.status));
 assert.match(r.reviewed,/^\d{4}-\d{2}-\d{2}$/);
 assert(r.sources.length>0);for(const s of r.sources){assert(new URL(s.url).protocol==='https:');assert(s.label);}
 assert(Array.isArray(r.metrics));assert(Array.isArray(r.patterns));
 if(r.repo)assert.match(r.revision,/^[a-f0-9]{40}$/);
 if(Date.now()-Date.parse(r.reviewed)>30*86400000)console.warn(`REVIEW DUE ${r.id}`);
}
console.log(`Validated ${records.length} evidence records. No provider calls.`);

const root = fileURLToPath(new URL('../', import.meta.url));
const guides = JSON.parse(await readFile(resolve(root, 'guides.json'), 'utf8'));
const guideIds = new Set();
for (const g of guides) {
 assert.match(g.id, /^[a-z0-9-]+$/);
 assert(!guideIds.has(g.id), `Duplicate guide ${g.id}`); guideIds.add(g.id);
 for (const key of ['title','summary','audience','reviewed','status']) assert(typeof g[key] === 'string' && g[key].length, `${g.id}: ${key}`);
 assert(g.evidence.length > 0);
 for (const id of g.evidence) assert(ids.has(id), `${g.id}: unknown evidence ${id}`);
 assert(g.patterns.length > 0 && g.sections.length > 0);
 const sections = new Set();
 for (const s of g.sections) {
  assert.match(s.id, /^[a-z0-9-]+$/); assert(!sections.has(s.id)); sections.add(s.id);
  assert(s.title && Array.isArray(s.paragraphs));
  if (s.language === 'json') JSON.parse(s.code);
  if (s.table) for (const row of s.table.rows) assert.equal(row.length, s.table.columns.length);
 }
}
async function checkLinks(dir) {
 for (const entry of await readdir(dir, {withFileTypes:true})) {
  if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
  const path = resolve(dir, entry.name);
  if (entry.isDirectory()) { await checkLinks(path); continue; }
  if (!entry.name.endsWith('.md')) continue;
  const content = await readFile(path, 'utf8');
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
   const target = match[1].split('#')[0];
   if (!target || /^[a-z]+:/i.test(target)) continue;
   await access(resolve(dirname(path), target)).catch(() => assert.fail(`${path}: missing link ${target}`));
  }
 }
}
await checkLinks(root);
console.log(`Validated ${guides.length} guides and local Markdown links.`);

const theses=JSON.parse(await readFile(resolve(root,'theses.json'),'utf8'));
const thesisIds=new Set();
for(const t of theses){
 assert.match(t.id,/^[a-z0-9-]+$/); assert(!thesisIds.has(t.id)); thesisIds.add(t.id);
 assert(t.claim.startsWith('With Jev,'));
 for(const k of ['situation','input','result','label']) assert(t.example[k]?.length>10);
 for(const r of [t.value,t.confidence]) {assert(['low','medium','moderate','high'].includes(r.level));assert(r.reason.length>20);}
 for(const id of t.evidence) assert(ids.has(id),`${t.id}: missing evidence ${id}`);
 assert(t.test.status==='planned'); assert(t.test.dataset && t.test.baselines.length && t.test.metrics.length && t.test.decision);
}
for(const r of records) {assert(['low','moderate','high'].includes(r.confidence.level));assert(r.confidence.reason.length>20);}
console.log(`Validated ${theses.length} theses, examples, ratings and test plans.`);
