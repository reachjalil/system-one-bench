import { readFile, writeFile, mkdir } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const records = JSON.parse(await readFile(new URL('catalog.json', root), 'utf8'));
const theses = JSON.parse(await readFile(new URL('theses.json', root), 'utf8'));
const guides = JSON.parse(await readFile(new URL('guides.json', root), 'utf8'));
await mkdir(new URL('records/', root), { recursive: true });
await mkdir(new URL('guides/', root), { recursive: true });
for (const r of records) {
  const content = `# ${r.title}\n\n${r.status} · ${r.kind} · reviewed ${r.reviewed}\n\n${r.affiliation}\n\n## Evidence confidence\n\n${r.confidence.level}. ${r.confidence.reason}\n\n## What was observed\n\n${r.workload}\n\n${r.method}\n\n## Baseline\n\n${r.baseline}\n\n## Finding\n\n${r.finding}\n\n${r.metrics.map(m => `- ${m}`).join('\n')}\n\n## Limits\n\n${r.limitations}\n\n## What we would test in System One\n\n${r.implication}\n\nThis feature recommendation is our interpretation. Related Engine patterns: ${r.patterns.map(p => '`' + p + '`').join(', ') || 'none'}.\n\n## Primary sources\n\n${r.sources.map(s => `- [${s.label}](${s.url})`).join('\n')}\n\n${r.revision ? `Reviewed revision: \`${r.revision}\`.\n` : ''}`;
  await writeFile(new URL(`records/${r.id}.md`, root), content);
}
const table = t => `| ${t.columns.join(' | ')} |\n| ${t.columns.map(() => '---').join(' | ')} |\n${t.rows.map(row => `| ${row.join(' | ')} |`).join('\n')}`;
for (const g of guides) {
  const content = `# ${g.title}\n\n${g.summary}\n\nReviewed ${g.reviewed}. ${g.status}\n\n${g.sections.map(s => `## ${s.title}\n\n${s.paragraphs.join('\n\n')}${s.code ? '\n\n```' + s.language + '\n' + s.code + '\n```' : ''}${s.table ? '\n\n' + table(s.table) : ''}`).join('\n\n')}\n\n## Evidence and limits\n\n${g.evidence.map(id => { const r = records.find(r => r.id === id); return `- [${r.title}](../records/${id}.md). ${r.headline}`; }).join('\n')}\n\nRelated Engine patterns: ${g.patterns.map(p => '`' + p + '`').join(', ')}.\n\n[All guides](../README.md#practical-guides) · [System One setup](https://systemoneengine.com/docs/)\n`;
  await writeFile(new URL(`guides/${g.id}.md`, root), content);
}
await writeFile(new URL('README.md', root), `# System One Bench\n\nA reference for what Jev can help an agent do. Start with the value and a plain-language example, then inspect the evidence and the next test.\nThis public catalog records what each experiment measured, which baseline it used\nand where its conclusion stops. It supports development of [System One Engine](https://systemoneengine.com).\n\nWe maintain both projects. We accept firsthand Reddit and X posts, builder demos, official examples and benchmarks. Anecdotes can suggest a useful task, but they do not prove its benefit. External results below are author-reported; we have not\nindependently rerun them. Our own work is labeled first-party. Documentation is\nlabeled reference and does not count as a benchmark.\n\n## Capability theses\n\nPotential value is our editorial priority for individual agent users. Evidence confidence describes the support for each bounded claim. Neither is a model probability or a savings promise.\n\n| With Jev, an agent can... | Potential value | Evidence confidence |\n| --- | --- | --- |\n${theses.map(t => `| [${t.title}](theses/${t.id}.md) | ${t.value.level} | ${t.confidence.level} |`).join('\n')}\n\nEach thesis has an illustrative situation, a proposed input and result, supporting and conflicting sources, and a test plan. [Rating method](METHODOLOGY.md#value-and-confidence) · [Test backlog](TEST_PLAN.md).\n\n## Start with a task\n\n| Your task | Start here | What remains unproven |\n| --- | --- | --- |\n| Select context for a coding or research agent | [Passage reranking](records/passage-reranking.md) | Final answer quality and full task cost |\n| Check a claim against a tool result | [Batched checks](records/batched-evidence.md) | Reliability on real agent conversations |\n| Choose among available tools | [Tool prediction](records/tool-sequence.md) | Completed task success |\n| Inspect a failed agent run | [Failure attribution](records/agent-failure-attribution.md) | Automatic diagnosis or repair |\n| Define several checks over shared text | [Signal decomposition](records/phishing-signals.md) | Transfer to a different workload |\n| Route calls to a cheaper model | [Routing ablation](records/routing-ablation.md) | Incremental benefit from Jev in that study |\n\n## Evidence library\n\n${records.length} reviewed records. Scores from different tasks are not one leaderboard.\n\n| Scenario | Evidence | Finding |\n| --- | --- | --- |\n${records.map(r => `| [${r.title}](records/${r.id}.md) | ${r.status} · ${r.kind} | ${r.headline} |`).join('\n')}\n\n## Practical guides\n\nThese guides turn research into experiments with the current Engine contracts. They\ndo not claim that the example recipes reproduce the upstream results.\n\n${guides.map(g => `- [${g.title}](guides/${g.id}.md). ${g.summary}`).join('\n')}\n\n[Feature evidence map](FEATURE_MAP.md) · [Metric definitions](METHODOLOGY.md) · [Review history](REVIEW_LOG.md)\n\n## Reproduce and contribute\n\n\`npm test\` checks the catalog, guide references and generated-file links without\nmodel calls. \`npm run build\` generates this index, records and guides.\n\`npm run check:sources\` reports changes to pinned source repositories without\nrewriting findings.\n\nThe [agent-decision diagnostic](benchmarks/agent-decisions/) includes the input cases,\nrunner and complete first-run results. Running it against a provider is separate\nfrom validation and may incur charges.\n\n[Contribution rules](CONTRIBUTING.md) · [Submit evidence](https://github.com/reachjalil/system-one-bench/issues/new/choose)\n\nOriginal summaries and code use the MIT license. Linked reports, datasets and model\nservices retain their own terms. We link upstream data instead of republishing it.\n`);
console.log(`Generated ${records.length} records and ${guides.length} guides.`);

await mkdir(new URL('theses/', root), {recursive:true});
for (const t of theses) {
 const content = `# ${t.title}

${t.claim}

Reviewed ${t.reviewed}. This is a bounded capability thesis, not a promise of general reliability.

## A human example

${t.example.situation}

${t.example.input}

${t.example.result}

${t.example.label}

## Potential value

${t.value.level}. ${t.value.reason}

## Evidence confidence

${t.confidence.level}. ${t.confidence.reason}

These are editorial ratings. [How we assign them](../METHODOLOGY.md#value-and-confidence).

## Evidence, including disagreement

${t.evidence.map(id => {const r=records.find(r=>r.id===id); return `- [${r.title}](../records/${id}.md). ${r.status}. ${r.headline}`;}).join('\n')}

## Test plan

Status: ${t.test.status}. The protocol below has not run.

${t.test.dataset}

Compare against:

${t.test.baselines.map(b=>'- '+b).join('\n')}

Measure:

${t.test.metrics.map(m=>'- '+m).join('\n')}

${t.test.decision}

Planned report path: \`${t.test.report}\`. Keep the corpus, question versions, every attempt, failure cases and complete-workflow costs with the report. Revise the thesis rating after reviewing the outcome, including a negative result.

## Engine connection

Related recipes: ${t.patterns.map(p=>'\`'+p+'\`').join(', ')}. A recipe is an implementation starting point. Its presence does not mean this protocol passed.
`;
 await writeFile(new URL(`theses/${t.id}.md`,root),content);
}
await writeFile(new URL('TEST_PLAN.md',root), `# Tests to run next

These are planned protocols, not completed studies or scheduled jobs. Prioritize the
high-value cases with a clear comparison. Save original inputs and predefine labels
before using the provider. Keep proposed protocols separate from existing results.

| Thesis | Value | Confidence | Status |
| --- | --- | --- | --- |
${theses.map(t=>`| [${t.title}](theses/${t.id}.md#test-plan) | ${t.value.level} | ${t.confidence.level} | ${t.test.status} |`).join('\n')}

## Record an outcome

Use the [finding template](templates/finding.md). Include the case hash, provider and
model version, prompt revision, baseline, failures, complete-task time and cost basis.
State whether the result supports, narrows or rejects the thesis. Do not change the
original hypothesis or overwrite the first run. Update the thesis confidence with a
dated reason and link the new report.

Existing completed work: [12-case batching diagnostic](benchmarks/agent-decisions/).
That diagnostic does not complete the broader claim-checking protocol above.
`);
console.log(`Generated ${theses.length} capability theses and their test backlog.`);
