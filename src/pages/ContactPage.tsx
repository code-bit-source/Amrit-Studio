import { useState, type FormEvent } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/projects';

const CONTACT_LINKS = {
  email: socialLinks.email,
  location: 'https://www.google.com/maps/search/?api=1&query=Delhi,India',
  linkedin: socialLinks.linkedin,
  github: socialLinks.github,
  portfolio: socialLinks.portfolio,
} as const;

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
};

const contactCards = [
  {
    label: 'Email',
    value: 'amritmr760@gmail.com',
    href: CONTACT_LINKS.email,
    icon: Mail,
    cursor: 'Mail',
  },
  {
    label: 'Base',
    value: 'Delhi, India',
    href: CONTACT_LINKS.location,
    icon: MapPin,
    cursor: 'Visit',
    external: true,
  },
] as const;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectGoal: 'Full Stack Website',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${formData.projectGoal} enquiry from ${formData.fullName}`
    );
    const body = encodeURIComponent(
      [
        'Hello Amrit,',
        '',
        'I want to connect regarding a project.',
        '',
        `Name: ${formData.fullName}`,
        `Email: ${formData.email}`,
        `Project Goal: ${formData.projectGoal}`,
        `Message: ${formData.message || 'Not provided'}`,
      ].join('\n')
    );

    window.location.href = `${CONTACT_LINKS.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <PageTransition>
      <div className="bg-[#0a0a0a] px-4 pb-8 pt-28 sm:px-6 md:px-12 md:pb-4 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 md:gap-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] xl:gap-20">
            <div className="min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 max-w-[9ch] text-[clamp(2.5rem,12vw,7rem)] font-bold uppercase leading-[0.9] tracking-tighter text-white md:mb-10 xl:text-[clamp(4rem,5.6vw,6.2rem)]"
              >
                Let&apos;s start a serious project conversation
              </motion.h1>

              <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/60 md:mb-14 md:text-xl">
                If you need a MERN stack build, a polished marketing site, an eCommerce product or a strong portfolio presence, this is the best place to start.
              </p>

              <div className="mb-10 flex flex-wrap gap-3 md:mb-16">
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 md:text-xs">
                  MERN + Web Builds
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white/70 md:text-xs">
                  Response via Email
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(item.external ? externalLinkProps : {})}
                      className="group min-w-0 rounded-3xl border border-white/10 bg-white/3 p-5 transition-colors hover:border-[#e2fb4b]/40 cursor-none hover-target md:p-6"
                      data-cursor={item.cursor}
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:bg-[#e2fb4b] md:h-12 md:w-12">
                        <Icon size={18} className="text-white transition-colors group-hover:text-black" />
                      </div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-white/40 md:text-xs">
                        {item.label}
                      </p>
                      <p className="break-all text-sm text-white transition-colors group-hover:text-[#e2fb4b] md:text-base">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8 md:mt-16">
                <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/40 md:text-xs">
                  Quick Links
                </p>

                <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-white/70 md:gap-6 md:text-sm">
                  <a
                    href={CONTACT_LINKS.linkedin}
                    {...externalLinkProps}
                    className="transition-colors hover:text-[#e2fb4b]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={CONTACT_LINKS.github}
                    {...externalLinkProps}
                    className="transition-colors hover:text-[#e2fb4b]"
                  >
                    GitHub
                  </a>
                  <Link
                    to={CONTACT_LINKS.portfolio}
                    className="transition-colors hover:text-[#e2fb4b]"
                  >
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/4 p-5 sm:p-6 md:rounded-[2.5rem] md:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-white/6 to-transparent" />

              <div className="relative">
                <div className="mb-8 md:mb-10">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e2fb4b] md:text-xs">
                    Enquiry Form
                  </p>
                  <h2 className="mb-3 text-2xl font-bold uppercase tracking-tighter text-white sm:text-3xl md:text-4xl">
                    Tell me what you&apos;re building
                  </h2>
                  <p className="text-sm leading-relaxed text-white/50 md:text-base">
                    This opens your email app with project details pre-filled for a faster first response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                  <div className="space-y-2 md:space-y-3">
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 md:text-xs">
                      Full Name
                    </label>
                    <input
                      required
                      placeholder="John Doe"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 focus:border-[#e2fb4b] md:py-4 md:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 md:text-xs">
                      Email Address
                    </label>
                    <input
                      required
                      placeholder="john@example.com"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 focus:border-[#e2fb4b] md:py-4 md:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 md:text-xs">
                      Project Goal
                    </label>
                    <select
                      value={formData.projectGoal}
                      onChange={(e) => handleChange('projectGoal', e.target.value)}
                      className="w-full appearance-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors focus:border-[#e2fb4b] md:py-4 md:text-base"
                    >
                      <option value="Full Stack Website" className="bg-[#0a0a0a]">
                        Full Stack Website
                      </option>
                      <option value="eCommerce Platform" className="bg-[#0a0a0a]">
                        eCommerce Platform
                      </option>
                      <option value="Marketing Website" className="bg-[#0a0a0a]">
                        Marketing Website
                      </option>
                      <option value="Portfolio Website" className="bg-[#0a0a0a]">
                        Portfolio Website
                      </option>
                      <option value="Admin Panel / Dashboard" className="bg-[#0a0a0a]">
                        Admin Panel / Dashboard
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="block text-[10px] uppercase tracking-widest text-white/40 md:text-xs">
                      Project Brief
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Share your idea, goals, deadline or required features..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-white/15 focus:border-[#e2fb4b] md:py-4 md:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-4 rounded-full bg-[#e2fb4b] py-4 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-[1.02] active:scale-95 md:py-5 md:text-sm"
                  >
                    Send Enquiry
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-2 md:h-5 md:w-5"
                    />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
