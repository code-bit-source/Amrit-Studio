import { motion } from 'framer-motion';
import {
  companyReference,
  processSteps,
  projects,
  socialLinks,
  techMarquee,
} from '../data/projects';

const featuredProjects = projects.filter((project) => project.type === 'featured');
const standardProjects = projects.filter((project) => project.type === 'standard');

const statusLabel: Record<(typeof projects)[number]['status'], string> = {
  live: 'Live Project',
  'frontend-demo': 'Frontend Demo',
  'in-progress': 'In Progress',
};

const ArrowUpRightIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6 },
};

export const Work = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
        <div>
          <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-5">
            Selected Work
          </p>
          <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white">
            Selected <br /> <span className="text-white/30">project work</span>
          </h2>
        </div>
        <p className="text-white/45 max-w-sm md:text-right uppercase text-[10px] md:text-xs tracking-widest font-bold">
          Curated product, marketing and portfolio work from a 14-month professional journey.
        </p>
      </div>

      <div className="mb-24 md:mb-36">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4 md:mb-6">
              Featured
            </p>
            <h3 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white leading-[0.95]">
              High-impact <br />
              <span className="text-white/30">project highlights</span>
            </h3>
          </div>
          <p className="text-white/40 max-w-sm md:text-right uppercase text-[10px] md:text-xs tracking-widest font-bold">
            eCommerce, education and conversion-focused digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.article
              key={project.title}
              {...revealProps}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group rounded-[1.8rem] overflow-hidden border border-white/10 bg-white/2 hover:border-white/25 transition-colors"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
                <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                  <span
                    className="text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-white/10 backdrop-blur bg-black/55 text-white"
                  >
                    {statusLabel[project.status]}
                  </span>
                  <span
                    className="text-[10px] md:text-xs uppercase tracking-widest font-bold px-3 py-1.5 rounded-full text-black"
                    style={{ backgroundColor: project.accent }}
                  >
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest mb-2">
                      {project.company} • {project.role}
                    </p>
                    <h4 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                      {project.title}
                    </h4>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-black group-hover:bg-white transition-all">
                    <ArrowUpRightIcon size={16} />
                  </div>
                </div>

                <p className="text-white/60 text-sm md:text-base leading-relaxed mb-5">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-white/70 text-[10px] md:text-xs border border-white/10 rounded-full px-3 py-1.5 bg-white/3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white text-[10px] md:text-xs uppercase tracking-widest font-bold hover:text-[#e2fb4b] transition-colors"
                    >
                      {link.label}
                      <ArrowUpRightIcon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mb-24 md:mb-36">
        <div className="mb-12 md:mb-16">
          <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4">
            More Work
          </p>
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-[0.95]">
            Additional <br /> <span className="text-white/30">delivery work</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {standardProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              {...revealProps}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group border border-white/10 hover:border-[#e2fb4b]/45 transition-colors rounded-3xl md:rounded-4xl p-6 md:p-8 bg-white/2"
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-widest font-bold mb-2">
                    {statusLabel[project.status]}
                  </p>
                  <h4 className="text-white text-xl md:text-2xl font-bold uppercase tracking-tighter">
                    {project.title}
                  </h4>
                  <p className="text-white/40 mt-2 uppercase text-[10px] md:text-xs tracking-widest">
                    {project.role}
                  </p>
                </div>
                <span className="text-white/30 uppercase text-[10px] md:text-xs tracking-widest">
                  {project.year}
                </span>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-white/70 text-[10px] md:text-xs border border-white/10 rounded-full px-3 py-1.5 bg-white/2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/80 text-[10px] md:text-xs uppercase tracking-widest font-bold hover:text-[#e2fb4b] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRightIcon size={14} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-24 md:mb-36">
        <div className="mb-12 md:mb-16">
          <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4">
            Process
          </p>
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-[0.95]">
            How projects <br /> <span className="text-white/30">move forward</span>
          </h3>
        </div>

        <div className="border-t border-white/10">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              {...revealProps}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 items-start py-8 md:py-10 border-b border-white/10 hover:bg-white/2 transition-colors px-2"
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

      <div className="mb-24 md:mb-36">
        <div className="mb-10 md:mb-14">
          <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4">
            Toolbox
          </p>
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white leading-[0.95]">
            Core stack <br /> <span className="text-white/30">in rotation</span>
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
                className="text-white/70 hover:text-[#e2fb4b] transition-colors uppercase text-lg md:text-3xl font-bold tracking-tighter flex items-center"
              >
                {tech}
                <span className="text-[#e2fb4b] mx-4 md:mx-6">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-8 md:pt-12">
        <p className="text-white/50 text-sm md:text-base font-light max-w-2xl">
          A curated mix of product, portfolio and marketing-focused builds across different delivery contexts.
        </p>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 md:gap-4 bg-white text-black px-6 md:px-8 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-[1.03] active:scale-95 transition-transform"
        >
          <LinkedinIcon size={16} />
          Explore full profile
          <ArrowUpRightIcon size={16} />
        </a>
      </div>
    </section>
  );
};
