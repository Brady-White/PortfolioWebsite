import React, { useEffect, useRef } from 'react';
import '../Styling/TextSwap.css';
import dashboard from '../Components/Images/TextSwap/TS_Dashboard.png';
import login from '../Components/Images/TextSwap/TS_Login.png';
import listing from '../Components/Images/TextSwap/TS_Listing.png';
import manageProfile from '../Components/Images/TextSwap/ManageProfile.png';


const TextSwap: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval = setInterval(() => {
      scrollContainer.scrollLeft += 1; // Adjust scroll speed
      // Reset to the start when reaching the end
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset to the start of the duplicate
      }
    }, 10);// Adjust the interval speed for smoother or faster scrolling

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, []);
  return (
    <div>
       <div className='intro-text'>
        <h1 className="welcome-title">Welcome to Text Swap</h1>
        <p className="welcome-message">This is the Text Swap page.</p>   
    </div>
     <div className='horizontal-scroll'ref={scrollContainerRef}>
        <img className="listing" src={listing} alt="Listing" loading="lazy" />
        <img className="dashboard" src={dashboard} alt="Dashboard" loading="lazy"/>
        <img className="login" src={login} alt="Login" loading="lazy"/>
        <img className="manageProfile" src={manageProfile} alt="ManageProfile" loading="lazy"/>
        <img className="listing" src={listing} alt="Listing" loading="lazy" />
        <img className="dashboard" src={dashboard} alt="Dashboard" loading="lazy"/>
        <img className="login" src={login} alt="Login" loading="lazy"/>
        <img className="manageProfile" src={manageProfile} alt="ManageProfile" loading="lazy"/>
      </div>
    </div>
  );
};

export default TextSwap;