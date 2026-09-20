# System One Bench

Public evidence catalog, maintained alongside System One Engine but independent of
its private application source. Do not publish secrets, private app code or upstream
datasets. Code and original summaries are MIT; linked research retains its own terms.

Read CONTRIBUTING.md before editing evidence. Every result needs a primary source,
review date, methodology, baseline, limitations and an affiliation disclosure.
Reported is not reproduced. Synthetic and production observations stay distinct.
Do not call model probabilities calibrated without calibration evidence. Preserve
negative findings. Never infer end-to-end task success from isolated tool prediction.

Edit catalog.json for evidence and guides.json for practical guides. Generated README,
records and guides come from scripts/build.mjs. Follow WRITING.md for public copy.
Run `npm test` then `npm run build` to regenerate the index and
individual records. Live runs are separate, explicit and billable; retain all cases,
errors and attempts. Record the dataset hash and model/provider identity. Do not tune
on results and relabel the same cases held-out. No automatic live inference in CI.
Link a feature recommendation to its evidence and say when the mapping is our inference.
Do not contact other tasks. Commit scoped tested milestones.
