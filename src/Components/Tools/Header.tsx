import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../Styling/Header.css';
import darkLogo from '../Images/darkLogo.png';
import lightLogo from '../Images/lightLogo.png';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="Header">
      <header className="header">
        <nav className="nav-bar">
          <ul className="nav-links">
            <li><Link to="/Skills" className={`nav-link ${location.pathname === '/Skills' ? 'active' : ''}`}>Skills</Link></li>
            <li><Link to="/Projects" className={`nav-link ${location.pathname === '/Projects' ? 'active' : ''}`}>Projects</Link></li>
            <li><Link to="/About" className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`}>About</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
