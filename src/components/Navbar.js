import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music">Music</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/pix">Pix</Link></li>
        <li><Link to="/merch">Merch</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/shows">Shows</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;