# averymoon.co — V6.9.2 Material Procurement Action Views + Built Systems Route Audit

Built on V6.9.1.

Material Procurement changes:
- Removes the invented 18-month demand-support line graph.
- Adds a website-native 13-Week Purchasing Action Planner based directly on the workbook's Planning Hub:
  suggested orders, scheduled receipts, weekly uncovered quantity/status, and material actions.
- Corrects the Purchasing Calendar orientation to match the workbook:
  weeks run vertically; materials run horizontally.
- Reframes Planning Horizons around the workbook's actual current-quarter, 3-month/3-period, 6-month, 12-month, and 18-month views.
- Keeps long-range requirement bars only as a compact 12M vs 18M comparison inside the broader multi-horizon section.

Built Systems route audit:
- alloy-procurement → material-procurement-planning
- onboarding-certification → training-certification-system
- foundry-inventory → production-supplies-replenishment
- cross-training-matrix → workforce-capability-planning
- equipment-downtime-dashboard → equipment-reliability-downtime
- workforce-scheduling → production-planning-scheduling
- Updated site data, SystemCard slug conditionals, related-system links, and internal Built Systems hrefs.
- Removed the obsolete generic [slug].astro duplicate route now that all six systems have bespoke pages.
