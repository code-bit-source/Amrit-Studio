import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/TextReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {
  companyReference,
  experienceEntries,
  experienceHighlights,
  processSteps,
  projects,
  techMarquee,
} from '../data/projects';

const featuredProjects = projects.filter((project) => project.type === 'featured');
const standardProjects = projects.filter((project) => project.type === 'standard');

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    skills: [
      'React.js',
      'Tailwind CSS',
      'Framer Motion',
      'Responsive UI',
      'Animated Interfaces',
      'Conversion-focused Layouts',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'JWT Authentication',
      'Authorization',
      'REST APIs',
      'Admin Workflows',
    ],
  },
  {
    title: 'Database & Auth',
    skills: [
      'MongoDB',
      'Role Based Access',
      'Session Flows',
      'Protected Routes',
      'Data Structuring',
    ],
  },
  {
    title: 'Delivery',
    skills: [
      'Deployment',
      'Performance Cleanup',
      'UI Polish',
      'Client-ready Presentation',
      'Project Positioning',
    ],
  },
] as const;

// const SERVICES = [
//   {
//     number: '01',
//     title: 'MERN Stack Applications',
//     description:
//       'End-to-end product development covering UI, backend APIs, auth, database structure and deployment.',
//   },
//   {
//     number: '02',
//     title: 'Marketing Websites',
//     description:
//       'High-clarity marketing pages and service websites designed to look premium and communicate fast.',
//   },
//   {
//     number: '03',
//     title: 'eCommerce & Admin Panels',
//     description:
//       'Storefronts, product flows, course selling systems and role-aware admin experiences.',
//   },
//   {
//     number: '04',
//     title: 'Portfolio & Brand Presence',
//     description:
//       'Professional portfolio experiences for creators, artists and personal brands that need credibility.',
//   },
// ] as const;

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="bg-[#0a0a0a] pt-32 md:pt-40 pb-24 md:pb-40 min-h-screen">
        <div className="px-6 md:px-12 mb-20 md:mb-32">
          <TextReveal
            text="MERN stack developer building product, marketing and portfolio experiences with clean execution."
            className="text-[clamp(3rem,10vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-bold uppercase leading-[0.95] tracking-tighter text-white max-w-full md:max-w-[92%]"
          />
        </div>

        <div className="relative w-full h-[60vh] md:h-[78vh] overflow-hidden mb-20 md:mb-36">
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop"
            alt="Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12">
            <h2 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-tight">
              Structured Work <br /> Strong Presentation
            </h2>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="md:sticky md:top-32">
              <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-6 md:mb-8">
                About
              </h3>
              <h4 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter leading-tight">
                I turn listed projects into credible digital case studies and usable products.
              </h4>
            </div>
            <div className="space-y-10 md:space-y-12 md:pt-32">
              <p className="text-lg md:text-2xl text-white/60 leading-relaxed font-light">
                My work spans eCommerce builds, course platforms, marketing websites, admin panels and portfolio experiences. The projects shown across this website reflect that working range directly.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 md:pt-12 border-t border-white/10">
                {experienceHighlights.map((item) => (
                  <div key={item.label}>
                    <h4 className="text-white text-4xl md:text-5xl font-bold mb-2 tracking-tighter">
                      {item.value}
                    </h4>
                    <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest font-bold">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4 md:mb-6">
                Experience
              </h3>
              <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.95]">
                Updated professional <br /> background
              </h2>
            </div>
            <p className="text-white/50 text-base md:text-lg max-w-xl font-light">
              Current experience positioning alongside one year of freelance delivery, with listed work and company reference aligned to the rest of the portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] gap-6 md:gap-8">
            <div className="space-y-6 md:space-y-8">
              {experienceEntries.map((exp, idx) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group border border-white/10 hover:border-[#e2fb4b]/50 transition-colors rounded-3xl md:rounded-4xl p-6 md:p-10 bg-white/2"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-6 md:mb-8">
                    <div>
                      <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-widest font-bold mb-2">
                        {exp.mode}
                      </p>
                      <h4 className="text-white text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-tight">
                        {exp.company}
                      </h4>
                      <p className="text-white/40 mt-2 uppercase text-[10px] md:text-xs tracking-widest">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <p className="text-white/60 text-sm md:text-base uppercase tracking-widest">
                        {exp.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                    {exp.summary}
                  </p>

                  {exp.meta ? (
                    <p className="text-white/35 uppercase text-[10px] md:text-xs tracking-[0.22em] mt-6">
                      {exp.meta}
                    </p>
                  ) : null}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="border border-white/10 rounded-3xl md:rounded-4xl p-6 md:p-8 bg-white/2 h-fit"
            >
              <h4 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-5">
                Reference
              </h4>
              <h5 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-5">
                {companyReference.company}
              </h5>
              <div className="space-y-4 text-white/65 text-sm md:text-base leading-relaxed">
                <p>
                  Founder: <span className="text-white">{companyReference.founder}</span>
                </p>
                <p>
                  Contact: <span className="text-white">{companyReference.phone}</span>
                </p>
                <p>
                  Reference available for the listed Puro Marketing projects shown in the work sections.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="mb-12 md:mb-20">
            <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4 md:mb-6">
              Work Snapshot
            </h3>
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.95]">
              Featured and listed <br /> project mix
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="rounded-3xl md:rounded-4xl overflow-hidden border border-white/10 bg-white/2"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-widest font-bold mb-2">
                    Featured Work
                  </p>
                  <h4 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-3">
                    {project.title}
                  </h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border border-white/10 rounded-3xl md:rounded-4xl bg-white/2 p-6 md:p-8">
            <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest font-bold mb-5">
              Additional Listed Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {standardProjects.map((project) => (
                <div
                  key={project.title}
                  className="border border-white/10 rounded-[1.25rem] p-4 md:p-5"
                >
                  <h5 className="text-white text-lg md:text-xl font-bold uppercase tracking-tighter mb-2">
                    {project.title}
                  </h5>
                  <p className="text-white/55 text-sm md:text-base leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="mb-12 md:mb-20">
            <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4 md:mb-6">
              Skills
            </h3>
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.95]">
              The tools <br /> I build with
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="border border-white/10 rounded-3xl md:rounded-4xl p-6 md:p-8 bg-white/2 hover:border-[#e2fb4b]/40 transition-colors"
              >
                <h4 className="text-white uppercase tracking-widest text-xs md:text-sm font-bold mb-5 md:mb-6">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-white/70 text-xs md:text-sm border border-white/10 rounded-full px-3 py-1.5 bg-white/2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="mb-12 md:mb-20">
            <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4 md:mb-6">
              Process
            </h3>
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-[0.95]">
              How I handle <br /> delivery
            </h2>
          </div>

          <div className="border-t border-white/10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-start py-8 md:py-10 border-b border-white/10 hover:bg-white/2 transition-colors px-2"
              >
                <span className="text-[#e2fb4b] text-sm md:text-base font-bold tracking-widest">
                  {step.number}
                </span>
                <h4 className="text-white text-xl md:text-3xl font-bold uppercase tracking-tighter">
                  {step.title}
                </h4>
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed col-span-2 md:col-span-1">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24 md:mb-36">
          <div className="mb-8 md:mb-10">
            <h3 className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-sm font-bold mb-4">
              Stack
            </h3>
          </div>
          <div className="relative overflow-hidden border-y border-white/10 py-6 md:py-8">
            <motion.div
              className="flex gap-8 md:gap-12 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
            >
              {[...techMarquee, ...techMarquee].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-white/70 uppercase text-lg md:text-3xl font-bold tracking-tighter flex items-center whitespace-nowrap"
                >
                  {tech}
                  <span className="text-[#e2fb4b] mx-4 md:mx-6">•</span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-4xl md:rounded-[3rem] bg-[#e2fb4b] p-8 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div>
              <h3 className="text-black text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.95] max-w-2xl">
                Need the same clarity for your next build?
              </h3>
              <p className="text-black/60 mt-4 md:mt-6 text-base md:text-lg font-light max-w-xl">
                The about page, work page and experience sections now all reflect the same updated professional story.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 md:gap-4 bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-[1.03] active:scale-95 transition-transform w-fit"
            >
              Let&apos;s Talk
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
