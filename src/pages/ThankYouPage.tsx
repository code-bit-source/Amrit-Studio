import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageTransition>
      <div className="bg-[#e2fb4b] min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-black mb-8">
            Thank <br /> You!
          </h1>
          <p className="text-black/60 text-xl md:text-2xl max-w-md mx-auto font-medium uppercase tracking-widest">
            Your message has been received. We will get back to you shortly.
          </p>
          
          <div className="mt-20">
            <div className="w-16 h-1 bg-black/10 mx-auto relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-black"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
            <p className="mt-4 text-black/40 text-xs uppercase tracking-[0.3em]">
              Redirecting in 5 seconds
            </p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ThankYouPage;
