/* App.js */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Chess from './components/Chess/Chess';
import './App.css'; 
import Work from './components/Work/Work';
import Travel from './components/Travel/Travel';

function App() {
  return (
    <Router>
      <Navbar />
      
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/travel" element={<Travel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;