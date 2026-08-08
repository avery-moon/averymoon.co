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
    category: 'Forecasting',
    title: 'Alloy Procurement Forecasting System',
    metric: '$3M inventory · 18-month horizon',
    summary: 'A semi-automated forecasting system that connected projected demand, current inventory, and future purchasing needs for production-critical alloy.',
    problem: 'Production depended on having the correct alloy available at the correct time. Shortages could stop production entirely, while purchasing decisions required visibility far beyond the immediate schedule.',
    approach: 'Designed a semi-automated forecasting structure that translated projected demand into an 18-month planning horizon and improved visibility for approximately $3M in alloy inventory.',
    outcome: 'Improved proactive purchasing decisions, reduced shortage risk, and gave stakeholders a clearer view of future material requirements.'
  },
  {
    slug: 'cross-training-matrix',
    number: '02',
    category: 'Workforce Systems',
    title: 'Building-Wide Cross-Training Matrix',
    metric: '200 employees · ~40 roles',
    summary: 'A facility-wide capability system designed to make skills, gaps, and cross-training opportunities visible in one place.',
    problem: 'Workforce capability was difficult to assess across a large population with many specialized roles, making staffing and development planning harder than necessary.',
    approach: 'Built a structured matrix covering approximately 200 employees across roughly 40 operational roles, making existing competencies and development gaps visible.',
    outcome: 'Supported workforce planning, succession planning, training prioritization, and more flexible staffing decisions.'
  },
  {
    slug: 'equipment-downtime-dashboard',
    number: '03',
    category: 'Operational Analytics',
    title: 'Equipment Downtime Dashboard',
    metric: 'Recurring loss visibility',
    summary: 'A dashboard designed to turn recurring equipment downtime into clearer information for maintenance and operational prioritization.',
    problem: 'Recurring equipment losses were difficult to interpret consistently without a clear view of when, where, and how downtime was occurring.',
    approach: 'Created a structured dashboard that surfaced production losses and recurring equipment issues, helping teams identify patterns and prioritize maintenance attention.',
    outcome: 'Improved operational visibility and supported more data-informed maintenance prioritization.'
  },
  {
    slug: 'foundry-inventory',
    number: '04',
    category: 'Inventory Systems',
    title: 'Foundry Inventory Tracking System',
    metric: '65 line items · ~$300K',
    summary: 'A centralized inventory system improving visibility into purchasing and production planning across foundry materials.',
    problem: 'Material information was fragmented across roughly 65 line items, making purchasing decisions and production planning harder to coordinate.',
    approach: 'Built a centralized tracking system covering approximately $300K in material value and designed around the recurring information needs of production planning.',
    outcome: 'Improved inventory purchasing visibility, accountability, and production planning.'
  }
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
