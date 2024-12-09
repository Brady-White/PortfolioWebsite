import React from 'react';
import Button from '../Components/Tools/Button';
import { useNavigate } from 'react-router-dom';
import '../Styling/Projects.css';

const Cuteness: React.FC = () => {
  const navigate = useNavigate();
  const homeButton = () => {
    navigate('/');
  };
  const textSwapButton = () => {
    navigate('/TextSwap');
  };
  // const textSwapButton = () => {
  //   navigate('/TextSwap');
  // };
  // const textSwapButton = () => {
  //   navigate('/TextSwap');
  // };
  return (
    <div>
      <h1 className="welcome-title">Welcome to My Projects</h1>
      <Button text="Back to Welcome" onClick={homeButton} className="homeButton"/>
      <div className='projects-container'>
        <div className='project' onClick={textSwapButton}>
          <h2 className='project-title'>Project 1</h2>
          <p className='project-description'>This is a project description.</p>
        </div>
        <div className='project'>
          <h2 className='project-title'>Project 2</h2>
          <p className='project-description'>This is a project description.</p>
        </div>
        <div className='project'>
          <h2 className='project-title'>Project 3</h2>
          <p className='project-description'>This is a project description.</p>
        </div>
      </div>
    </div>
  );
};

export default Cuteness;