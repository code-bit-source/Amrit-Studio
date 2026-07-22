import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Magnetic } from './Magnetic';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 24);

    if (latest > previous && latest > 150 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-6"
      >
        <div
          className={`mx-auto mt-4 md:mt-5 max-w-[1440px] rounded-full border px-5 md:px-7 py-3 md:py-4 flex items-center justify-between transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 ${
            scrolled || isMenuOpen
              ? 'bg-[#0a0a0a]/78 backdrop-blur-xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.32)]'
              : 'bg-[#0a0a0a]/40 backdrop-blur-md border-white/8'
          }`}
        >
          <Link
            to="/"
            className="text-lg sm:text-xl md:text-2xl font-bold tracking-tighter uppercase text-white shrink-0"
          >
            Amrit <span className="text-[#e2fb4b]">Studio</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center text-white uppercase text-sm font-medium tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:opacity-60 transition-opacity ${
                  location.pathname === link.path ? 'text-[#e2fb4b]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Magnetic>
              <Link to="/contact">
                <button
                  className="border border-white/20 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover-target"
                  data-cursor="Let's Go"
                >
                  Estimate Project
                </button>
              </Link>
            </Magnetic>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <Link to="/contact">
              <button className="bg-[#e2fb4b] text-black px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                Estimate
              </button>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[84px] z-40 md:hidden"
          >
            <div className="rounded-[2rem] border border-white/10 bg-[#0a0a0a]/96 backdrop-blur-xl p-6 flex flex-col gap-4 shadow-[0_16px_60px_rgba(0,0,0,0.4)]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-tighter text-white hover:text-[#e2fb4b] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 bg-[#e2fb4b] text-black px-6 py-4 rounded-full font-bold uppercase tracking-widest text-center"
              >
                Estimate Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
