/* App.js */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Chess from './components/Chess/Chess';
import './App.css';
import Work from './components/Work/Work';
import Travel from './components/Travel/Travel';

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = { duration: 0.25, ease: 'easeInOut' };

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
      >
        <Routes location={location}>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
