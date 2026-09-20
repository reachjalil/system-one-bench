# Browser companion diagnostic

Six original form tasks test the System One browser companion against a known
script. Cases and scoring were written before live calls. These are development
fixtures, not held-out websites or a comparison with a frontier agent.

Each arm starts a fresh browser. Tasks vary the requested name, mode and existing
values. Success requires exactly one saved server record with the requested values.
A model's `done` response is not the verifier. Every attempt is saved immediately.
Alternating arm order reduces a simple ordering effect. No automatic retries run.

Run explicitly with Node 22.18+, installed Chrome and a scoped connection:

```sh
npm install --no-save sysone@0.6.0
SYSONE_CONNECTION=/private/path/agent.json node benchmarks/browser-companion/run.mjs
```

For a reviewed local client checkout, set `SYSONE_CLIENT_ROOT` to that checkout after
building it. `SYSONE_BENCH_OUTPUT` chooses a new output path. Do not overwrite an
existing run. The connection needs only `decide`. Keep credentials out of this repo.

The run clock includes observation, decision requests, actions, the final screenshot
and a read of the fixture's saved record. Browser startup and initial navigation are
reported separately. Host reasoning and visual review are absent. The deterministic
arm knows the fixture's IDs and exact task values. It establishes the cost of using
code when the workflow is already known, not general semantic browser ability.

The next study needs unfamiliar sites, varying control labels, incomplete loading,
missing controls and blinded task verification. It also needs a real main-agent
baseline with all host turns and fallback work counted.
