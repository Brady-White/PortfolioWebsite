import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styling/Welcome.css';
import '../Components/Images/Logo.png';
import Button from '../Components/Tools/Button';


const Welcome: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="welcome-container">
    <h1 className="welcome-title">Welcome to My Portfolio</h1>
    <img src={require('../Components/Images/Logo.png')} alt="Logo" className="logo" />
    <p className="welcome-message">I'm glad you're here. Please explore my projects and get to know more about me.</p>
  
    </div>
  );
};

export default Welcome;