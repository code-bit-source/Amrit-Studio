import { useState, type FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/projects';

const SOCIAL_ITEMS = [
  { label: 'LinkedIn', href: socialLinks.linkedin },
  { label: 'GitHub', href: socialLinks.github },
  { label: 'Portfolio', href: socialLinks.portfolio },
  { label: 'Email', href: socialLinks.email },
] as const;

const LOCATIONS = ['India', 'Worldwide', 'Remote Friendly'] as const;

const externalLinkProps = {
  target: '_blank',
  rel: 'noreferrer',
};

export const Footer = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const currentYear = new Date().getFullYear();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Quick Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nHi Amrit,`
    );

    const mailtoLink = `${socialLinks.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const inputClassName =
    'bg-transparent border-b border-black/20 py-2 outline-none focus:border-black transition-colors text-black placeholder:text-black/40 text-sm md:text-base w-full';

  return (
    <footer
      id="contact"
      className="relative z-10 bg-[#d9ff58] px-6 md:px-12 py-16 md:py-32 rounded-t-[2.5rem] md:rounded-t-[5rem] border-t border-black/10"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.45fr)_minmax(240px,0.55fr)] xl:grid-cols-[minmax(0,1.55fr)_320px] gap-12 lg:gap-16 xl:gap-24 items-start">
          <div className="w-full lg:pr-4 xl:pr-8">
            <Link to="/contact">
              <h2 className="text-5xl md:text-[10vw] lg:text-[clamp(5rem,7vw,8rem)] font-bold text-black uppercase leading-[0.9] tracking-tighter mb-8 md:mb-12 hover:opacity-70 transition-opacity max-w-[10ch]">
                Ready to <br className="hidden md:block" /> build better?
              </h2>
            </Link>

            <a
              href={socialLinks.email}
              className="inline-block text-xl md:text-4xl font-light text-black/60 hover:text-black transition-colors underline underline-offset-4 md:underline-offset-8 decoration-1 break-all"
            >
              amritmr760@gmail.com
            </a>

            <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-black/70">
                MERN Stack Delivery
              </span>
              <span className="rounded-full border border-black/10 px-4 py-2 text-[10px] md:text-xs uppercase tracking-widest font-bold text-black/70">
                Marketing + Product Builds
              </span>
            </div>

            {isHome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 md:mt-20 lg:mt-16 p-6 md:p-8 border border-black/10 rounded-3xl md:rounded-4xl bg-black/4.5 w-full lg:max-w-[720px] shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-black font-bold uppercase tracking-widest text-[10px] md:text-sm mb-6">
                  Quick Contact
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className={inputClassName}
                  />

                  <input
                    required
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className={inputClassName}
                  />

                  <button
                    type="submit"
                    className="md:col-span-2 bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm mt-4 hover:scale-[1.02] active:scale-95 transition-transform w-full"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </div>

          <div className="flex flex-row lg:flex-col flex-wrap gap-12 md:gap-20 lg:gap-10 text-black w-full lg:w-auto lg:min-w-60 lg:items-end lg:text-right lg:pt-2">
            <div className="space-y-4 min-w-[120px] lg:w-full">
              <h4 className="uppercase font-bold tracking-widest text-[10px] md:text-sm opacity-40">
                Connect
              </h4>

              <div className="flex flex-col gap-2 uppercase font-medium text-sm md:text-base lg:items-end">
                {SOCIAL_ITEMS.map(({ label, href }) => {
                  if (href.startsWith('/')) {
                    return (
                      <Link
                        key={label}
                        to={href}
                        className="hover:opacity-40 transition-opacity"
                      >
                        {label}
                      </Link>
                    );
                  }

                  const isExternal =
                    href.startsWith('http') || href.startsWith('mailto:');
                  return (
                    <a
                      key={label}
                      href={href}
                      className="hover:opacity-40 transition-opacity"
                      {...(isExternal ? externalLinkProps : {})}
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 min-w-[120px] lg:w-full">
              <h4 className="uppercase font-bold tracking-widest text-[10px] md:text-sm opacity-40">
                Location
              </h4>

              <div className="flex flex-col gap-2 uppercase font-medium text-sm md:text-base lg:items-end">
                {LOCATIONS.map((place) => (
                  <p key={place}>{place}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-32 lg:mt-36 pt-8 md:pt-12 border-t border-black/10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-8">
          <Link
            to={socialLinks.portfolio}
            className="text-black font-bold text-xl md:text-2xl uppercase tracking-tighter text-center md:text-left md:justify-self-start"
          >
            Amrit <span className="opacity-50">Studio</span>
          </Link>

          <div className="text-black/40 text-[10px] md:text-sm uppercase tracking-widest font-medium text-center md:justify-self-center">
            © {currentYear} Amrit Studio • All Rights Reserved
          </div>

          <div className="flex gap-6 md:gap-8 text-black/60 text-[10px] md:text-sm uppercase font-medium justify-center md:justify-self-end">
            <a
              href={socialLinks.linkedin}
              {...externalLinkProps}
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={socialLinks.github}
              {...externalLinkProps}
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
