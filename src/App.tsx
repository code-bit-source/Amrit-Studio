import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExperienceSection } from './components/ExperienceSection';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { About } from './components/About';
import { Footer } from './components/Footer';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';

const HomePage = () => (
  <main>
    <Hero />
    <ExperienceSection />
    <Work />
    <Services />
    <About />
  </main>
);

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#e2fb4b] selection:text-black">
      <div className="noise" />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] bg-[#0a0a0a] flex items-center justify-center"
            exit={{ 
              clipPath: "inset(0 0 100% 0)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold uppercase tracking-tighter"
            >
              Amrit<span className="text-[#e2fb4b]">.</span>
            </motion.div>
          </motion.div>
      ) : (
        <SmoothScroll key="main-content">
            <Cursor />
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </SmoothScroll>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
