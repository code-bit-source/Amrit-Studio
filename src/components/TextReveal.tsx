import { motion } from 'framer-motion';

export const TextReveal = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as any,
      },
    },
    hidden: {
      y: "100%",
    },
  };

  return (
    <motion.div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '100%',
        overflow: 'visible',
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-block mr-[0.2em] max-w-full">
          <motion.span
            variants={child}
            className="inline-block max-w-full"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
};
