export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/approach/', label: 'Approach' },
  { href: '/built-systems/', label: 'Built Systems' },
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
    slug: 'alloy-procurement',
    number: '01',
    category: 'Materials Planning · Aerospace Manufacturing',
    title: 'Materials Planning & Procurement System',
    metric: '~$3M on hand · up to 18 months',
    summary: 'Turns customer demand, inventory, and purchasing constraints into forward material requirements.',
    problem: 'Alloy planning depended on manually consolidating several exports into a short-horizon view while critical purchasing knowledge remained concentrated in one person.',
    approach: 'Designed a documented planning system that converts customer demand into alloy requirements, projects inventory depletion, applies purchasing constraints, and surfaces role-specific actions across multiple horizons.',
    outcome: 'Reduced routine refresh time from as much as an hour to about five minutes and expanded planning visibility from roughly six months to as far as eighteen months.'
  },
  {
    slug: 'onboarding-certification',
    number: '02',
    category: 'Learning Systems · Manufacturing Operations',
    title: 'Training & Certification System',
    metric: '8 employees · 6–14 weeks to certification',
    summary: 'Creates a structured pathway from onboarding through certification and continued development.',
    problem: 'After mandatory onboarding, new employees entered the department without a standardized training plan, assigned trainers, weekly expectations, or supervisor-level visibility into progress.',
    approach: 'Built an eight-week adaptable pathway combining trainer assignments, weekly competencies, hands-on practice, Quality feedback, part-experience tracking, and Level 1/2/3 progression standards.',
    outcome: 'All eight employees in the initial cohort certified faster than historically reported norms, with certification achieved in approximately 6–14 weeks.'
  },
  {
    slug: 'foundry-inventory',
    number: '03',
    category: 'Inventory Systems · Manufacturing Operations',
    title: 'Inventory Planning & Control System',
    metric: '65 line items · ~$300K',
    summary: 'Centralizes material inventory for clearer purchasing and production planning.',
    problem: 'Material information was fragmented across roughly 65 line items, making purchasing decisions and production planning harder to coordinate.',
    approach: 'Built a centralized tracking system covering approximately $300K in material value and designed around the recurring information needs of production planning.',
    outcome: 'Improved inventory purchasing visibility, accountability, and production planning.'
  },
  {
    slug: 'cross-training-matrix',
    number: '04',
    category: 'Workforce Systems · Manufacturing Operations',
    title: 'Workforce Capability Planning System',
    metric: '200 employees · ~40 roles',
    summary: 'Maps workforce capability across roles to reveal coverage gaps and training priorities.',
    problem: 'Workforce capability was difficult to assess across a large population with many specialized roles, making staffing and development planning harder than necessary.',
    approach: 'Built a structured matrix covering approximately 200 employees across roughly 40 operational roles, making existing competencies and development gaps visible.',
    outcome: 'Supported workforce planning, succession planning, training prioritization, and more flexible staffing decisions.'
  },
  {
    slug: 'equipment-downtime-dashboard',
    number: '05',
    category: 'Operational Analytics · Manufacturing Operations',
    title: 'Operational Performance & Downtime System',
    metric: 'Recurring loss visibility',
    summary: 'Surfaces recurring equipment losses to support maintenance and operational priorities.',
    problem: 'Recurring equipment losses were difficult to interpret consistently without a clear view of when, where, and how downtime was occurring.',
    approach: 'Created a structured dashboard that surfaced production losses and recurring equipment issues, helping teams identify patterns and prioritize maintenance attention.',
    outcome: 'Improved operational visibility and supported more data-informed maintenance prioritization.'
  },
  {
    slug: 'workforce-scheduling',
    number: '06',
    category: 'Workforce Planning · Operations',
    title: 'Workforce Planning & Scheduling System',
    metric: 'Allocation · scheduling · coverage',
    summary: 'Organizes staffing needs and available capability into a repeatable scheduling process.',
    problem: 'Staffing decisions required repeated manual coordination across roles, coverage needs, and changing priorities, creating unnecessary administrative work and inconsistent visibility.',
    approach: 'Built a structured scheduling workflow that organized workforce requirements, available capability, and allocation decisions into a more repeatable planning process.',
    outcome: 'Reduced manual scheduling effort, improved visibility into coverage, and supported faster workforce allocation decisions.'
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
