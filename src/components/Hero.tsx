import { motion } from 'framer-motion';
import { Marquee } from './Marquee';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-100dvh flex flex-col justify-center px-6 md:px-12 bg-[#0a0a0a] pt-32 pb-24 overflow-hidden">
      <div className="relative z-10">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-[clamp(3.5rem,14vw,9rem)] md:text-[clamp(5rem,11vw,10rem)] font-bold leading-[0.85] md:leading-[0.8] uppercase tracking-[-0.05em] text-white max-w-[9ch]"
          >
            MERN Stack <br />
            <span className="text-[#e2fb4b]">Solutions</span>
          </motion.h1>
        </div>
        
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mt-8 md:mt-12 max-w-xl flex flex-col gap-6 md:gap-8"
        >
          <p className="text-lg md:text-2xl text-white/60 font-light leading-relaxed">
            I&apos;m Amrit, a MERN Stack Developer building eCommerce, marketing and admin-driven web products with sharp execution, clean UI and practical business focus.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-fit bg-[#e2fb4b] text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform hover-target" data-cursor="Click">
                Start a project
              </button>
            </Link>
            <Link to="/work" className="w-full sm:w-auto">
              <button className="w-full sm:w-fit border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all hover-target" data-cursor="View">
                See Our Work
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden lg:block">
        <motion.div 
          initial={{ opacity: 0, rotate: 90 }}
          animate={{ opacity: 1, rotate: 90 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-6"
        >
          <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-bold whitespace-nowrap">Awwwards SOTD 2024</span>
          <div className="w-20 h-px bg-white/10" />
          <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-bold whitespace-nowrap">FWA Winner</span>
        </motion.div>
      </div>

      <div className="mt-16 md:mt-24">
        <Marquee />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex items-center gap-4 text-white/20 text-[10px] md:text-sm tracking-widest uppercase"
      >
        <span>Scroll Down</span>
        <div className="w-8 md:w-12 h-px bg-white/20" />
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#e2fb4b]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
