# Accessibility input diagnostic

Six original, single-decision cases test whether Jev chooses the expected operation
and exact observed node when supplied computed accessibility data. Labels and this
scoring rule are frozen before the first provider call. Each case gets one attempt.
No action is executed. This is a development diagnostic, not task completion or a
comparison with a main agent.

The independent target oracle is the fixture author's `data-test` attribute. That
attribute is absent from the model input. The target must match the exact retained
DOM node, including in an open shadow root. The no-model reference reads this known
attribute and supplies the labeled operation; its trivial success does not establish
a general selector policy.

Record raw answers, usage, model/provider, code and dataset hashes, input bytes,
observation time, request time, chosen-target correctness and uncertainty at the
unchanged 0.8 threshold. Preserve service errors as failures. Do not retry or tune on
these cases and call them held-out. A later paired ablation should remove AX context
while keeping everything else fixed.

Run after building the public client, with a private scoped connection:

```sh
SYSONE_CLIENT_ROOT=/path/to/sysone-client \
SYSONE_CONNECTION=/private/path/agent.json \
SYSONE_BENCH_OUTPUT=/path/to/new-result.json \
node benchmarks/browser-accessibility/run.mjs
```

The runner starts only its own local fixture and temporary browser. Live inference
is explicit and separate from CI. It refuses to replace an existing result.
