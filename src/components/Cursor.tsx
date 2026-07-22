import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useSpring(0, { damping: 30, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button, .hover-target, Link') as HTMLElement;
      if (target) {
        setIsHovering(true);
        const text = target.getAttribute('data-cursor');
        setCursorText(text || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 bg-[#e2fb4b] rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 6 : 1,
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
    >
      {isHovering && cursorText && (
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[2px] font-black uppercase text-black"
          style={{ letterSpacing: '0.05em' }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
