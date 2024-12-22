import React from 'react';
import Button from '../Components/Tools/Button';
import { useNavigate, Link } from 'react-router-dom';
import '../Styling/Projects.css';
import logo from '../Components/Images/TextSwap/TextSwapLogo.png'

const Cuteness: React.FC = () => {
  const navigate = useNavigate();
  const textSwapButton = () => {
    navigate('/TextSwap');
  };

  return (
    <div>
      <h1 className="welcome-title">Welcome to My Projects</h1>
      <div className='projects-container'>
          <li className= 'project-item'>
            <Link to="/TextSwap" className="TS-link">
              <img src={logo} className="ProjImage"/>
            </Link>
            <Link to="/Project2" className="Proj2-link">
              <img src={logo} className="ProjImage"/>
            </Link>
          </li>
        
      </div>
    </div>
  );
};

export default Cuteness;