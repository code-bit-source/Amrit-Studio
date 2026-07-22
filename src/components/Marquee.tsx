const words = ["MERN Stack", "React Specialist", "Node.js Expert", "UI/UX Design", "Full Stack", "Clean Code", "Custom Solutions", "Ecommerce", "SEO Ready"];

export const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/10 py-4 md:py-8 mt-12 md:mt-24">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...words, ...words].map((word, i) => (
          <span key={i} className="text-2xl md:text-6xl font-bold uppercase tracking-tighter text-white/10 mx-4 md:mx-8">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
