import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PageTransition } from '../components/PageTransition';
import { ExperienceSection } from '../components/ExperienceSection';
import { TextReveal } from '../components/TextReveal';
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

const reveal = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

const WorkPage = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ['start end', 'end start'],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ['0%', '-28%']);

  return (
    <PageTransition>
      <div className="bg-[#0a0a0a] pt-40 pb-20 px-6 md:px-12 min-h-screen">
        <header className="mb-28 md:mb-36">
          <TextReveal
            text="Puro Marketing Work"
            className="text-[clamp(3.4rem,12vw,8rem)] md:text-[clamp(4.5rem,9vw,9rem)] font-bold uppercase leading-[0.85] tracking-tighter text-white max-w-[10ch]"
          />

          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-10 md:mt-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-white/45 max-w-xl uppercase text-xs tracking-[0.2em]"
            >
              A curated portfolio of eCommerce, admin, marketing and brand work built across Puro Marketing and one year of freelance delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 text-white/60 uppercase text-xs tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-[#e2fb4b] animate-pulse" />
              Available for new work
            </motion.div>
          </div>
        </header>

        <div className="mx-[-1.5rem] md:mx-[-3rem]">
          <ExperienceSection />
        </div>

        <section className="mb-40 md:mb-56">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="max-w-3xl">
              <p className="text-[#e2fb4b] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
                Featured Work
              </p>
              <h2 className="text-5xl md:text-8xl font-bold uppercase text-white tracking-tighter leading-[0.85]">
                Built to <br />
                <span className="text-white/30">convert and scale</span>
              </h2>
            </div>
            <p className="text-white/40 max-w-sm uppercase text-xs tracking-[0.2em] md:text-right md:mt-4">
              Selected projects positioned as flagship portfolio work.
            </p>
          </div>

          <div className="flex flex-col gap-28 md:gap-40">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="mb-40 md:mb-56">
          <div className="mb-16 md:mb-20">
            <p className="text-[#e2fb4b] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
              Project List
            </p>
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-white tracking-tighter leading-[0.9]">
              Additional <br />
              <span className="text-white/30">production work</span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {standardProjects.map((item, i) => (
              <motion.div
                key={item.title}
                {...reveal}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start py-10 md:py-14 border-b border-white/10 hover:bg-white/[0.02] transition-colors px-2"
              >
                <div>
                  <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-[0.25em] mb-3">
                    {item.company} • {item.role} • {statusLabel[item.status]}
                  </p>
                  <h3 className="text-white text-3xl md:text-5xl font-bold uppercase tracking-tighter leading-[0.95] mb-5 group-hover:text-[#e2fb4b] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-lg font-light leading-relaxed max-w-3xl mb-6 md:mb-8">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-white/70 text-[10px] md:text-xs border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {item.links.map((link) => (
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

                <div className="flex md:flex-col items-start md:items-end gap-4 md:gap-8">
                  <span className="text-[#e2fb4b] text-sm md:text-base font-bold tracking-[0.25em]">
                    {item.year}
                  </span>
                  <div className="shrink-0 self-start md:self-center w-12 h-12 md:w-14 md:h-14 border border-white/15 rounded-full flex items-center justify-center text-white/60 group-hover:bg-[#e2fb4b] group-hover:text-black group-hover:border-[#e2fb4b] transition-all">
                    <ArrowUpRightIcon size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-40 md:mb-56">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div className="md:sticky md:top-32">
              <p className="text-[#e2fb4b] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
                Process
              </p>
              <h2 className="text-5xl md:text-7xl font-bold uppercase text-white tracking-tighter leading-[0.9]">
                How I position <br />
                <span className="text-white/30">projects professionally</span>
              </h2>
              <p className="text-white/40 mt-6 md:mt-8 text-base md:text-lg font-light max-w-md">
                Every project is framed around clarity, output quality and client-facing credibility.
              </p>
            </div>

            <div className="space-y-2">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...reveal}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group border border-white/10 hover:border-[#e2fb4b]/50 rounded-2xl md:rounded-[2rem] p-6 md:p-8 bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span className="text-[#e2fb4b] font-bold tracking-widest text-sm md:text-base">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-3 group-hover:text-[#e2fb4b] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={marqueeRef} className="mb-40 md:mb-56">
          <div className="mb-12 md:mb-16">
            <p className="text-[#e2fb4b] uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-6">
              Toolbox
            </p>
            <h2 className="text-5xl md:text-7xl font-bold uppercase text-white tracking-tighter leading-[0.9]">
              Stack used <br />
              <span className="text-white/30">across these builds</span>
            </h2>
          </div>

          <div className="relative overflow-hidden border-y border-white/10 py-8 md:py-12">
            <motion.div
              style={{ x: marqueeX }}
              className="flex gap-10 md:gap-16 w-max"
            >
              {[...techMarquee, ...techMarquee].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-white/70 uppercase text-2xl md:text-5xl font-bold tracking-tighter flex items-center whitespace-nowrap"
                >
                  {tech}
                  <span className="text-[#e2fb4b] mx-6 md:mx-10">✦</span>
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="mt-40 md:mt-56">
          <motion.div
            {...reveal}
            className="rounded-[2rem] md:rounded-[3rem] bg-[#e2fb4b] p-10 md:p-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
          >
            <div>
              <h3 className="text-black text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] max-w-3xl">
                Need product, marketing and portfolio work that looks serious?
              </h3>
              <p className="text-black/60 mt-4 md:mt-6 text-base md:text-lg font-light max-w-xl">
                This collection reflects the kind of build quality, positioning and presentation I bring to client work.
              </p>
              <p className="text-black/60 mt-3 text-sm md:text-base font-medium uppercase tracking-[0.18em]">
                Reference: {companyReference.founder} • {companyReference.phone}
              </p>
            </div>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 md:gap-4 bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm hover:scale-[1.03] active:scale-95 transition-transform w-fit"
            >
              <LinkedinIcon size={16} />
              Let&apos;s connect
              <ArrowUpRightIcon size={16} />
            </a>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

const FeaturedProject = ({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <motion.article
      ref={container}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)] gap-8 md:gap-12 items-center"
    >
      <div className="relative aspect-video overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10">
        <motion.img
          src={project.image}
          alt={project.title}
          style={{ y: imageY }}
          className="w-full h-[115%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex flex-wrap gap-2">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold px-4 py-2 rounded-full bg-black/60 backdrop-blur text-white border border-white/10">
            {statusLabel[project.status]}
          </span>
          <span
            className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold px-4 py-2 rounded-full text-black"
            style={{ backgroundColor: project.accent }}
          >
            {project.year}
          </span>
        </div>
      </div>

      <div>
        <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-[0.25em] mb-3">
          {project.company} • {project.role}
        </p>
        <h2 className="text-4xl md:text-6xl font-bold uppercase text-white tracking-tighter leading-[0.9] mb-5">
          {project.title}
        </h2>
        <p className="text-white/60 text-sm md:text-lg font-light leading-relaxed mb-6 md:mb-8">
          {project.summary}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-white/70 text-[10px] md:text-xs border border-white/15 rounded-full px-3 py-1.5 bg-white/[0.02]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
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
        {project.duration ? (
          <p className="text-white/35 uppercase text-[10px] md:text-xs tracking-[0.22em]">
            {project.duration}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
};

export default WorkPage;
