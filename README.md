# averymoon.co — V6.9.3 Link Fix + Chart Spacing

Built on V6.9.2.

## Fixes
- Keeps the Long-Range Requirement chart.
- Prevents the 12M / 18M labels and values from wrapping awkwardly.
- Gives the material label and both comparison bars more breathing room.

## Built Systems link/route audit
Current system-card slugs:
- material-procurement-planning
- training-certification-system
- production-supplies-replenishment
- workforce-capability-planning
- equipment-reliability-downtime
- production-planning-scheduling

Legacy routes now issue permanent redirects:
- alloy-procurement → material-procurement-planning
- onboarding-certification → training-certification-system
- foundry-inventory → production-supplies-replenishment
- cross-training-matrix → workforce-capability-planning
- equipment-downtime-dashboard → equipment-reliability-downtime
- workforce-scheduling → production-planning-scheduling

This means both newly rendered cards and old/cached/bookmarked URLs resolve to the renamed case-study pages.
