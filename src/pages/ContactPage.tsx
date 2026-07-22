import { useState, type FormEvent } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../data/projects';

const CONTACT_LINKS = {
  email: socialLinks.email,
  phone: 'tel:+919315868930',
  whatsapp: 'https://wa.me/919315868930',
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
    label: 'Phone',
    value: '+91 93158 68930',
    href: CONTACT_LINKS.phone,
    icon: Phone,
    cursor: 'Call',
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

    const whatsappMessage = [
      'Hello Amrit,',
      '',
      'I want to connect regarding a project.',
      '',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Project Goal: ${formData.projectGoal}`,
      `Message: ${formData.message || 'Not provided'}`,
    ].join('\n');

    const whatsappUrl = `${CONTACT_LINKS.whatsapp}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.location.href = whatsappUrl;
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <PageTransition>
      <div className="bg-[#0a0a0a] pt-32 md:pt-40 pb-2 md:pb-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.85fr)] gap-12 xl:gap-20 items-start">
            <div className="min-w-0">
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(3.2rem,9vw,7rem)] xl:text-[clamp(4rem,5.6vw,6.2rem)] font-bold uppercase leading-[0.88] tracking-tighter text-white mb-8 md:mb-10 max-w-[8ch] text-balance break-words"
              >
                Let&apos;s start a serious project conversation
              </motion.h1>

              <p className="text-lg md:text-xl text-white/60 mb-10 md:mb-14 max-w-2xl font-light leading-relaxed">
                If you need a MERN stack build, a polished marketing site, an eCommerce product or a strong portfolio presence, this is the best place to start.
              </p>

              <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/70">
                  14 Months at Puro Marketing
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/70">
                  MERN + Marketing Builds
                </span>
                <span className="rounded-full border border-white/10 px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-white/70">
                  Response via WhatsApp
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(item.external ? externalLinkProps : {})}
                      className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 md:p-6 transition-colors hover:border-[#e2fb4b]/40 cursor-none hover-target"
                      data-cursor={item.cursor}
                    >
                      <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#e2fb4b] transition-colors mb-5">
                        <Icon size={18} className="text-white group-hover:text-black transition-colors" />
                      </div>
                      <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-[0.2em] mb-2">
                        {item.label}
                      </p>
                      <p className="text-white text-sm md:text-base group-hover:text-[#e2fb4b] transition-colors break-all">
                        {item.value}
                      </p>
                    </a>
                  );
                })}
              </div>

              <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
                <p className="text-white/40 uppercase text-[10px] md:text-xs tracking-[0.2em] mb-4">
                  Quick Links
                </p>

                <div className="flex flex-wrap gap-4 md:gap-6 text-white/70 uppercase text-xs md:text-sm tracking-widest">
                  <a
                    href={CONTACT_LINKS.whatsapp}
                    {...externalLinkProps}
                    className="hover:text-[#e2fb4b] transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={CONTACT_LINKS.linkedin}
                    {...externalLinkProps}
                    className="hover:text-[#e2fb4b] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={CONTACT_LINKS.github}
                    {...externalLinkProps}
                    className="hover:text-[#e2fb4b] transition-colors"
                  >
                    GitHub
                  </a>
                  <Link
                    to={CONTACT_LINKS.portfolio}
                    className="hover:text-[#e2fb4b] transition-colors"
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
              className="relative min-w-0 bg-white/[0.04] p-6 md:p-10 rounded-[1.75rem] md:rounded-[2.5rem] border border-white/10 h-fit overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

              <div className="relative">
                <div className="mb-8 md:mb-10">
                  <p className="text-[#e2fb4b] uppercase text-[10px] md:text-xs tracking-[0.25em] font-bold mb-3">
                    Enquiry Form
                  </p>
                  <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-3">
                    Tell me what you&apos;re building
                  </h2>
                  <p className="text-white/50 text-sm md:text-base leading-relaxed">
                    This opens WhatsApp with your project details pre-filled for a faster first response.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-7">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest block">
                      Full Name
                    </label>
                    <input
                      required
                      placeholder="John Doe"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white outline-none focus:border-[#e2fb4b] transition-colors placeholder:text-white/15 text-sm md:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest block">
                      Email Address
                    </label>
                    <input
                      required
                      placeholder="john@example.com"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white outline-none focus:border-[#e2fb4b] transition-colors placeholder:text-white/15 text-sm md:text-base"
                    />
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest block">
                      Project Goal
                    </label>
                    <select
                      value={formData.projectGoal}
                      onChange={(e) => handleChange('projectGoal', e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white outline-none focus:border-[#e2fb4b] transition-colors appearance-none text-sm md:text-base cursor-pointer"
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
                    <label className="text-white/40 uppercase text-[10px] md:text-xs tracking-widest block">
                      Project Brief
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Share your idea, goals, deadline or required features..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 text-white outline-none focus:border-[#e2fb4b] transition-colors resize-none placeholder:text-white/15 text-sm md:text-base"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-[#e2fb4b] text-black py-4 md:py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-transform text-xs md:text-sm"
                  >
                    Send Enquiry
                    <ArrowRight
                      size={18}
                      className="md:w-5 md:h-5 group-hover:translate-x-2 transition-transform"
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
