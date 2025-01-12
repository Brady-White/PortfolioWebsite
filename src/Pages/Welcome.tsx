import React from 'react';
import '../Styling/Welcome.css'; // Link your CSS file here
import Headshot from "../Components/Images/Headshot.png";

const WelcomePage: React.FC = () => {
  const currentTime = new Date().getHours();
  const greeting =
    currentTime < 12
      ? 'Good Morning'
      : currentTime < 18
      ? 'Good Afternoon'
      : 'Good Evening';

  return (
    <div className="welcome-container">
      <div className="headshot-container">
        <img src={Headshot} alt="Brady's Headshot" className="headshot" />
      </div>
      {/* Welcome Section */}
      <div className="welcome-text">
        <h1 className="greeting">
          <span className="greeting-text">{greeting}</span>, <span className="name">I'm Brady</span>
        </h1>
        <p className="profession">
           <span className="typewriter">I'm a front-end web developer.</span>
        </p>
        <p className="description">
          I specialize in building visually appealing and responsive websites
          that offer a seamless user experience.
        </p>
      </div>
      
    </div>
  );
};

export default WelcomePage;
