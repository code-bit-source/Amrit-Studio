import { motion } from 'framer-motion';
import {
  companyReference,
  experienceEntries,
  experienceHighlights,
} from '../data/projects';

const revealProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.6 },
};

export const ExperienceSection = () => {
  return (
    <section className="px-6 md:px-12 py-24 md:py-28 bg-[#0a0a0a]">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <p className="text-[#e2fb4b] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-5">
            Experience
          </p>
          <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white leading-[0.9]">
            Professional <br />
            <span className="text-white/30">background</span>
          </h2>
        </div>
        <p className="text-white/45 max-w-md md:text-right uppercase text-[10px] md:text-xs tracking-widest font-bold">
          Dedicated experience overview covering Puro Marketing and independent freelance delivery.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 mb-16 md:mb-20">
        {experienceHighlights.map((stat, idx) => (
          <motion.div
            key={stat.label}
            {...revealProps}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="border-b border-white/10 md:border-b-0 md:border-r last:border-r-0 py-8 md:py-12 px-2 md:px-6"
          >
            <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tighter mb-3">
              {stat.value}
            </h3>
            <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest font-bold">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] gap-6 md:gap-8">
        <div className="space-y-6">
          {experienceEntries.map((entry, idx) => (
            <motion.article
              key={entry.company + entry.role}
              {...revealProps}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="rounded-3xl md:rounded-4xl border border-white/10 bg-white/2 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-widest font-bold mb-2">
                    {entry.mode}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                    {entry.company}
                  </h3>
                  <p className="text-white/40 mt-2 uppercase text-[10px] md:text-xs tracking-widest">
                    {entry.role}
                  </p>
                </div>
                <span className="text-white/35 uppercase text-[10px] md:text-xs tracking-widest">
                  {entry.duration}
                </span>
              </div>

              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                {entry.summary}
              </p>

              {entry.meta ? (
                <p className="text-white/35 uppercase text-[10px] md:text-xs tracking-[0.22em]">
                  {entry.meta}
                </p>
              ) : null}
            </motion.article>
          ))}
        </div>

        <motion.aside
          {...revealProps}
          className="rounded-3xl md:rounded-4xl border border-white/10 bg-white/2 p-6 md:p-8 h-fit"
        >
          <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-widest font-bold mb-4">
            Company Reference
          </p>
          <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-5">
            {companyReference.company}
          </h3>
          <div className="space-y-4 text-sm md:text-base text-white/65">
            <p>
              Founder: <span className="text-white">{companyReference.founder}</span>
            </p>
            <p>
              Contact:{' '}
              <a
                href={`mailto:${companyReference.phone}`}
                className="text-white underline underline-offset-4 transition-colors hover:text-[#e2fb4b]"
              >
                {companyReference.phone}
              </a>
            </p>
            <p>
              Website:{' '}
              <a
                href={companyReference.website}
                target="_blank"
                rel="noreferrer"
                className="text-white underline underline-offset-4 transition-colors hover:text-[#e2fb4b]"
              >
                {companyReference.website.replace('https://', '')}
              </a>
            </p>
            <p>
              Reference context: confirmation available for the listed Puro Marketing projects and role history.
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
