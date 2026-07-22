import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'MERN Stack Dev',
    description: 'Custom full-stack web applications built with MongoDB, Express, React, and Node.js for maximum scalability.'
  },
  {
    id: '02',
    title: 'CMS & E-commerce',
    description: 'Professional setup and customization for WordPress, Shopify, and WooCommerce to drive your online sales.'
  },
  {
    id: '03',
    title: 'Business Systems',
    description: 'Custom-built CRM and HRM solutions tailored to streamline your internal business operations and workflows.'
  },
  {
    id: '04',
    title: 'Modern UI/UX',
    description: 'High-end interactive designs using GSAP and Framer Motion that provide a premium experience for your users.'
  }
];

export const Services = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a]">
      <h2 className="text-white/30 uppercase tracking-widest text-xs md:text-sm mb-12 font-bold">What we do</h2>
      <div className="flex flex-col">
        {services.map((service) => (
          <div
            key={service.id}
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between cursor-none"
          >
            <div className="flex items-center gap-6 md:gap-24 relative z-10">
              <span className="text-white/20 font-bold text-xl md:text-2xl group-hover:text-[#e2fb4b] transition-colors">{service.id}</span>
              <h3 className="text-2xl md:text-7xl font-bold uppercase text-white group-hover:translate-x-4 transition-transform duration-500">
                {service.title}
              </h3>
            </div>
            
            <div className="md:hidden mt-4 text-white/60 text-sm font-light relative z-10">
              {service.description}
            </div>
            
            <AnimatePresence>
              {hovered === service.id && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="hidden md:block max-w-md mt-6 md:mt-0 text-white/60 text-lg font-light md:text-right relative z-10"
                >
                  {service.description}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Hover Background */}
            <motion.div 
              className="absolute inset-0 bg-[#111111] -z-0"
              initial={{ scaleY: 0 }}
              whileHover={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ originY: 1 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
