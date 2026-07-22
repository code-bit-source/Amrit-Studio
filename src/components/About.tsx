import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { TextReveal } from './TextReveal';

export const About = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="about" ref={container} className="relative py-40 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-5xl">
        <motion.div style={{ y }} className="space-y-12">
          <TextReveal 
            text="I build high-performance digital products that help brands scale and stand out."
            className="text-3xl md:text-7xl font-bold uppercase tracking-tight text-white leading-tight"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 md:pt-20">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-light">
                As a creative developer, I bridge the gap between complex engineering and award-worthy design. I don't just write code; I craft digital legacies.
              </p>
            </div>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#e2fb4b] rounded-full" />
                <span className="text-white text-lg md:text-xl uppercase font-bold tracking-widest">Full-Stack</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full" />
                <span className="text-white text-lg md:text-xl uppercase font-bold tracking-widest">UI/UX Design</span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full" />
                <span className="text-white text-lg md:text-xl uppercase font-bold tracking-widest">Animation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-0 bottom-0 opacity-5 md:opacity-10 pointer-events-none">
        <h2 className="text-[30vw] md:text-[25vw] font-bold uppercase tracking-tighter text-white whitespace-nowrap">
          AMRIT STUDIO
        </h2>
      </div>
    </section>
  );
};
