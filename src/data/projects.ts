export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectEntry = {
  title: string;
  company: string;
  role: string;
  duration?: string;
  type: 'featured' | 'standard';
  status: 'live' | 'frontend-demo' | 'in-progress';
  summary: string;
  stack: string[];
  links: ProjectLink[];
  accent: string;
  image: string;
  year: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  duration: string;
  mode: string;
  summary: string;
  meta?: string;
};

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/amrit-kumar-4aa789329',
  github: 'https://github.com/code-bit-source',
  portfolio: '/work',
  email: 'mailto:amritmr760@gmail.com',
} as const;

export const companyReference = {
  company: 'Puro Marketing',
  founder: 'Payal Mehta',
  phone: '+91 86556 55581',
} as const;

export const experienceHighlights = [
  { value: '14', label: 'Months at Puro Marketing' },
  { value: '12', label: 'Months freelance experience' },
  { value: '6', label: 'Core projects showcased' },
  { value: '360', label: 'Marketing + product coverage' },
] as const;

export const experienceEntries: ExperienceEntry[] = [
  {
    company: 'Puro Marketing',
    role: 'MERN Stack Developer',
    duration: '14 months',
    mode: 'Full-time experience',
    summary:
      'Worked across eCommerce, marketing websites, portfolios and admin-led product builds, including several of the projects listed below.',
    meta: 'Reference available via founder Payal Mehta • +91 86556 55581',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    duration: '1 year',
    mode: 'Independent client work',
    summary:
      'Handled frontend, full stack and portfolio delivery for independent clients, with practical ownership across design polish, development and deployment.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Strategize',
    description:
      'Map the offer, target audience, conversion goals and product scope before development starts.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Shape a clean visual system, focused content hierarchy and conversion-driven user journeys.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Develop fast, maintainable frontend and backend systems with role-based flows where needed.',
  },
  {
    number: '04',
    title: 'Launch',
    description:
      'Polish deployment, responsiveness and user testing so the final product feels production-ready.',
  },
] as const;

export const techMarquee = [
  'MERN Stack',
  'React.js',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JWT Auth',
  'Role Based Access',
  'Admin Panels',
  'REST APIs',
  'Tailwind CSS',
  'Framer Motion',
  'Responsive UI',
  'E-commerce',
  'Portfolio Sites',
  'Marketing Websites',
] as const;

export const projects: ProjectEntry[] = [
  {
    title: 'Saheli Store',
    company: 'Puro Marketing',
    role: 'Full Stack Developer',
    duration: 'Part of my Puro Marketing delivery experience',
    type: 'featured',
    status: 'live',
    summary:
      'A production-style MERN eCommerce platform with admin panel, catalog management, order flow and polished storefront UX, listed here as part of my Puro Marketing work.',
    stack: ['MERN Stack', 'Admin Panel', 'JWT Auth', 'MongoDB', 'Responsive UI'],
    links: [
      { label: 'Live Site', href: 'https://saheli-store-in.vercel.app/' },
    ],
    accent: '#e2fb4b',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
  {
    title: 'Surge Systems',
    company: 'Freelance',
    role: 'Frontend Developer',
    duration: 'Part of my freelance showcase work',
    type: 'featured',
    status: 'live',
    summary:
      'A bold enterprise-style SaaS presentation website added back into the portfolio as one of the earlier featured showcase projects.',
    stack: ['Frontend', 'Tailwind CSS', 'Motion UI', 'SaaS Website'],
    links: [{ label: 'Live Site', href: 'https://surgesystems-six.vercel.app/' }],
    accent: '#ffffff',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    year: '2024',
  },
  {
    title: 'Course Management System',
    company: 'Puro Marketing',
    role: 'MERN Stack Developer',
    type: 'featured',
    status: 'in-progress',
    summary:
      'A course selling platform with admin panel, role-based authentication and authorization, included here among the key Puro Marketing-aligned MERN projects.',
    stack: ['MERN Stack', 'RBAC', 'Admin Panel', 'JWT Auth', 'Course Selling'],
    links: [
      { label: 'GitHub', href: 'https://github.com/code-bit-source/creator-courses' },
    ],
    accent: '#79f2ff',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
  {
    title: 'Lumina',
    company: 'Puro Marketing',
    role: 'Frontend Developer',
    type: 'standard',
    status: 'frontend-demo',
    summary:
      'A frontend-only eCommerce demo focused on premium product presentation, responsive sections and conversion-oriented UI flow, presented here as one of the listed showcase builds.',
    stack: ['React.js', 'Frontend Demo', 'Responsive Design', 'Tailwind CSS'],
    links: [
      { label: 'Live Demo', href: 'https://saheeli-store.is-great.org/?i=1' },
    ],
    accent: '#ffffff',
    image:
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
  {
    title: 'Arambh Stays',
    company: 'Freelance',
    role: 'Frontend Developer',
    type: 'standard',
    status: 'live',
    summary:
      'A booking and hospitality-style website from the earlier portfolio set, now restored inside the current UI as part of the freelance showcase work.',
    stack: ['Booking UI', 'Responsive Design', 'Frontend Build'],
    links: [{ label: 'Live Site', href: 'https://arambh-stays.vercel.app/' }],
    accent: '#e2fb4b',
    image:
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop',
    year: '2024',
  },
  {
    title: 'The Musician',
    company: 'Freelance',
    role: 'Creative Frontend Developer',
    type: 'standard',
    status: 'live',
    summary:
      'A music portfolio experience from the previous project lineup, brought back to show visual storytelling and animated frontend presentation.',
    stack: ['React.js', 'Framer Motion', 'Portfolio UI'],
    links: [{ label: 'Live Site', href: 'https://musician-orcin.vercel.app/' }],
    accent: '#5f38f9',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop',
    year: '2023',
  },
  {
    title: 'Advocate Management System',
    company: 'Puro Marketing',
    role: 'Full Stack Developer',
    type: 'standard',
    status: 'frontend-demo',
    summary:
      'A MERN case-management product in progress with frontend completed and backend integration pending, included in the listed projects as an unfinished full stack build.',
    stack: ['MERN Stack', 'Dashboard UI', 'Case Management', 'In Progress'],
    links: [
      { label: 'Frontend', href: 'https://the-court-case.vercel.app/' },
      { label: 'GitHub', href: 'https://github.com/code-bit-source/adv-management-' },
    ],
    accent: '#ffb84d',
    image:
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
  {
    title: 'Marketing Agency Prototype',
    company: 'Puro Marketing',
    role: 'Frontend + Auth Developer',
    type: 'standard',
    status: 'in-progress',
    summary:
      'A marketing agency website prototype with login authentication and authorization, added here among the listed projects as a structured agency-focused concept.',
    stack: ['React.js', 'Authentication', 'Authorization', 'Marketing Site'],
    links: [
      { label: 'GitHub', href: 'https://github.com/code-bit-source/Marketing-agency-prototype' },
    ],
    accent: '#ff6b6b',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
  {
    title: 'VFX Artist Portfolio',
    company: 'Puro Marketing',
    role: 'Portfolio Designer & Developer',
    type: 'standard',
    status: 'live',
    summary:
      'A professional portfolio website for a MAAC-certified VFX artist, included in the listed work to reflect brand presentation and portfolio delivery capability.',
    stack: ['Portfolio Website', 'Professional Branding', 'Responsive UI'],
    links: [
      { label: 'Live Site', href: 'https://anshu-portfolio-psi.vercel.app/' },
    ],
    accent: '#a78bfa',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop',
    year: '2026',
  },
] as const;
