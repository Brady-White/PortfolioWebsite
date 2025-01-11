import React from 'react';
import '../Styling/Welcome.css';



const Welcome: React.FC = () => {


  return (
    <div className="Welcome" >
      <div className = "headshot">
        <h1 >HeadShot</h1>
      </div>
      <h1 className="welcome-title">Hello</h1>
      <p className="welcome-message">I'm glad you're here. Please explore my projects and get to know more about me.</p>
    </div>
  );
};

export default Welcome;