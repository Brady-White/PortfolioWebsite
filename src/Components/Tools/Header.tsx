import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styling/Header.css';
import logo from '../Images/Logo.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className='home-link'>
        <li>
            <Link to="/" className="nav-link">
              <img src={logo} className="nav-logo"/>
            </Link>
          </li>
        </ul>
        <ul className="nav-links">
          
          <li>
            <Link to="/Skills" className="nav-link">Skills</Link>
          </li>
          <li>
            <Link to="/Projects" className="nav-link">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
