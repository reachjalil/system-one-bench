# Contribute a result, including a negative one

Add a record to `catalog.json`, or open a Benchmark submission issue with the
original source. A useful entry answers: what decision, over which data, compared
with what, measured how, and where does it fail?

## Evidence states

- `reported` means we read the author's primary report; we have not rerun it.
- `reproduced` means we ran the published method and link our raw results and environment.
- `first-party` means our own run; explicitly disclose our involvement.
- `reference` means documented implementation or official guidance without a qualifying result.

Evidence kind is separate: vendor benchmark, independent experiment, synthetic test,
public-dataset study, production observation or implementation. A large synthetic
corpus is still synthetic. Star count and an attractive demo are not evaluation.

## Review checklist

1. Link the original report, code and data where available. Pin a source commit or
   dataset revision, add the retrieval date, and identify the author's affiliation.
2. Record dataset size and construction, model/version/provider, split and tuning,
   baseline, including a deterministic or no-model baseline, metric definitions, costs,
   latency distribution and error treatment. Use null or explicit unknowns when absent.
3. Separate measured values, price-derived estimates and marketing claims. Record
   whether routing overhead, host review, fallbacks and downstream inference are included.
4. Capture the strongest limitation and a failure case. A router that loses to a fixed
   model is worth publishing. A probability threshold is not proof of calibration.
5. State the bounded conclusion, then label any Engine feature mapping as our inference.
   Avoid security, approval or production-readiness claims from toy attack sets.
6. Do not copy upstream reports or redistribute data without permission. Write a short
   original summary and link the original. Linked sources retain their own licenses.
7. Run `npm run build` and `npm test`. Keep generated records in the same change.

## Keeping the catalog current

`npm run check:sources` fetches pinned repositories' current HEADs and reports drift.
It does not silently rewrite conclusions. Re-review changed methods and append a dated
revision note before changing metrics. CI validates submissions; manual source checks
produce an artifact. No scheduled inference, paid jobs or automatic benchmark claims.
Review dates older than 30 days are flagged by validation for re-checking.

For a new live experiment, write labels and scoring rules first, hash the corpus,
record every attempt and preserve the first run. Prompt changes require a new revision
and a fresh evaluation set before calling the result held-out.
