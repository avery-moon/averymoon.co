export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/approach/', label: 'Approach' },
  { href: '/built-systems/', label: 'Built Systems' },
  { href: '/selected-projects/', label: 'Selected Projects' },
  { href: '/research-writing/', label: 'Research & Writing' },
  { href: '/contact/', label: 'Contact' },
];

export const theories = [
  'Documentation is organizational memory.',
  "Complexity is inevitable. Confusion isn't.",
  'Good systems reduce decisions, not flexibility.',
  "Knowledge loses value when people can't find it.",
  'Every workflow teaches people something.',
  "The best documentation answers tomorrow's questions.",
  'Process should support people, not constrain them.',
  'The strongest systems become almost invisible.',
  'Better questions build better systems.',
  'Clarity is a form of leverage.',
  'A useful system makes the next decision easier.',
  'Structure should create clarity without eliminating judgment.',
];

export const systems = [
  {
    slug: 'material-procurement-planning',
    number: '01',
    category: 'Materials + Procurement',
    title: 'Material Procurement & Planning',
    metric: '~$3M on hand · up to 18 months',
    summary: 'Turns customer demand, inventory, and purchasing constraints into forward material requirements.',
    problem: 'Alloy planning depended on manually consolidating several exports into a short-horizon view while critical purchasing knowledge remained concentrated in one person.',
    approach: 'Designed a documented planning system that converts customer demand into alloy requirements, projects inventory depletion, applies purchasing constraints, and surfaces role-specific actions across multiple horizons.',
    outcome: 'Reduced routine refresh time from as much as an hour to about five minutes and expanded planning visibility from roughly six months to as far as eighteen months.'
  },
  {
    slug: 'training-certification-system',
    number: '02',
    category: 'Learning + Development',
    title: 'Training & Certification System',
    metric: '8 employees · 6–14 weeks to certification',
    summary: 'Creates a structured pathway from onboarding through certification and continued development.',
    problem: 'After mandatory onboarding, new employees entered the department without a standardized training plan, assigned trainers, weekly expectations, or supervisor-level visibility into progress.',
    approach: 'Built an eight-week adaptable pathway combining trainer assignments, weekly competencies, hands-on practice, Quality feedback, part-experience tracking, and Level 1/2/3 progression standards.',
    outcome: 'All eight employees in the initial cohort certified faster than historically reported norms, with certification achieved in approximately 6–14 weeks.'
  },
  {
    slug: 'production-supplies-replenishment',
    number: '03',
    category: 'Inventory + Control',
    title: 'Production Supplies & Replenishment',
    metric: '~$300K managed · $40K excess identified',
    summary: 'Turns physical counts, purchasing history, supplier information, and reorder logic into repeatable replenishment decisions.',
    problem: 'A basic count sheet showed inventory quantities and cost but left lead times, suppliers, reorder thresholds, purchasing history, and replenishment knowledge scattered across records and departmental memory.',
    approach: 'Built a centralized consumables inventory and replenishment model combining weekly physical counts with supplier, cost, lead-time, reorder, receipt, and purchasing information.',
    outcome: 'Prevented several shortages, identified and reconciled roughly $40K in excess inventory, and established repeatable replenishment decisions across about $300K in active supplies.'
  },
  {
    slug: 'workforce-capability-planning',
    number: '04',
    category: 'Workforce Capability',
    title: 'Workforce Capability Planning System',
    metric: '~200 employees · 9 departments · ~40 skills',
    summary: 'Makes organizational capability visible by showing who can do what, where coverage is thin, and where cross-training matters most.',
    problem: 'Capability knowledge lived primarily in supervisor memory and fragmented employee-level HR records, making building-wide coverage and skill gaps difficult to see.',
    approach: 'Built a centralized capability model linking employees, departments, tenure, skills, competency levels, and certification dates with forward and reverse lookup tools.',
    outcome: 'Creates facility-wide visibility into capability gaps, single points of failure, staffing flexibility, and cross-training opportunities while transferring long-term ownership to HR.'
  },
  {
    slug: 'equipment-reliability-downtime',
    number: '05',
    category: 'Operational Analytics',
    title: 'Equipment Reliability & Downtime Analysis',
    metric: '4 primary units · 3-level Pareto analysis',
    summary: 'Turns structured frontline downtime observations into recurring-failure intelligence and maintenance action.',
    problem: 'Machine-generated downtime reports contained unreliable inputs and basic charts but little context for understanding recurring failures or prioritizing limited maintenance resources.',
    approach: 'Redesigned downtime data collection, created a three-level failure taxonomy, and built machine-level and overall Pareto analysis tied to maintenance and problem-solving workflows.',
    outcome: 'Revealed chronic equipment issues that differed from prevailing assumptions, shifted maintenance attention toward recurring failure modes, and supported repair and capital-investment decisions.'
  },
  {
    slug: 'production-planning-scheduling',
    number: '06',
    category: 'Workforce Planning',
    title: 'Production Planning & Scheduling',
    metric: '~5–10 min/day planning',
    summary: 'Turns current work-in-process, routing constraints, capacity, and throughput targets into daily and weekly production priorities.',
    problem: 'Legacy production-planning software required hours of manual work each week, was unstable, and did not adequately account for operational spans, available capacity, or changing WIP.',
    approach: 'Designed a constraint-aware planning model that ingests current work orders, applies routing and span logic, incorporates headcount and throughput targets, and generates daily and weekly schedules.',
    outcome: 'Reduced my routine planning work from roughly 13–19 hours per week to about 5–10 minutes per day while improving visibility into aged WIP, late returns, and execution priorities.'
  },
];

export const papers = [
  {
    title: 'The Differences Between American and Canadian National Identity',
    meta: 'National Identity · Comparative Research',
    description: 'A comparative exploration of national identity in the United States and Canada.',
    url: 'https://www.jstor.org/stable/community.41134182'
  },
  {
    title: "Let's Hip-Hop Our Way to the American Dream",
    meta: 'Culture · Hip-Hop · American Studies',
    description: 'Research examining hip-hop through the lens of American ideals, culture, and social mobility.',
    url: 'https://www.jstor.org/stable/community.41134191?seq=1'
  },
  {
    title: 'Parallelism Between Lyricism, American Values, and Socioeconomic Status',
    meta: 'Culture · Socioeconomics · Lyricism',
    description: 'Research connecting lyrical themes, American values, and socioeconomic context.',
    url: 'https://www.jstor.org/stable/community.41134192?seq=1'
  },
  {
    title: 'A Comparative Economic Analysis of the Dominican Republic and Haiti',
    meta: 'Political Economy · Comparative Research',
    description: 'A comparative examination of the economic trajectories of the Dominican Republic and Haiti.',
    url: 'https://www.jstor.org/stable/community.41134183?seq=1'
  }
];
