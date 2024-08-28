import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Music from './pages/Music';
import Videos from './pages/Videos';
import Pictures from './pages/Pix';
import Merch from './pages/Merch';
import Contact from './pages/Contact';
import Shows from './pages/Shows';
import Pix from './pages/Pix';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/pix" element={<Pix />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;