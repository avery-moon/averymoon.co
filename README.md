# averymoon.co — V6.13.2 Navigation Audit + Final Mobile Fixes

Built on V6.13.1.

Built Systems order is now identical to the landing page:
01 Material Procurement & Planning
02 Training & Certification System
03 Production Supplies & Replenishment
04 Workforce Capability Planning System
05 Equipment Reliability & Downtime Analysis
06 Production Planning & Scheduling

Navigation:
- Every one of the six system pages now has a bottom navigation link.
- Links follow the same 01 → 06 order; project 06 loops to project 01 as “Explore Another System.”
- All bottom links and top “Built Systems” backlinks use plain root-relative production URLs.
- Training & Certification keeps one contextual link to Workforce Capability, while its bottom Next System now correctly points to Production Supplies & Replenishment.
- All six bottom navigation targets were checked against existing Astro page files.

Remaining mobile QA:
- Weekly downtime tracker gets a contained horizontal scroll rather than clipping Tuesday.
- Material planning horizon tables/charts scroll inside their panels instead of creating page-level overflow.
- Download/footer spacing is tightened on mobile.
- Bottom system navigation is larger and easier to tap on mobile.
