# averymoon.co — V6.12.2 Production Planning Spacing Hard Fix

Built on V6.12.1.

This is a corrective spacing pass after the earlier layout overrides did not visibly apply.

Root causes found:
1. The shared `.container` uses an explicit width capped by `--max`; increasing `max-width` alone could not widen scheduler sections.
2. The Section 03 override targeted `.external-span-flow`, but the live page uses `.route-flow`.

Fixes:
- Adds explicit section classes to Production Planning sections 03–05.
- Overrides container `width` directly on sections 02–06.
- Rebalances Section 02 architecture boxes.
- Rebalances Section 03 copy and actual `.route-flow` graphic.
- Tightens Section 04 Human-in-the-Loop spacing.
- Rebalances Section 05 Observed Impact / Next Iteration.
- Rebalances Section 06 reconstructed-views intro and chart spacing.
- Preserves the final six-page Technical Brief and its CTA.
