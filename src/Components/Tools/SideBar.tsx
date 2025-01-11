import React from "react";
import { Link } from "react-router-dom";
import "../../Styling/Sidebar.css"; // Import your CSS styles
import linkedinLogo from "../Images/Sidebar/linkedIn.png"; // Import your images
import githubLogo from "../Images/Sidebar/gitHub.png";
import Logo from "../Images/Sidebar/Logo.png";


function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar content here */}
      <ul>
      <li><Link to="/" ><img src={Logo} className="Logo" /></Link></li>
        <div className="socials">
        <li>
            <a href="https://www.linkedin.com/in/brady-james-white/" target="_blank" rel="noopener noreferrer" className="link-button">
                <img src={linkedinLogo} alt="LinkedIn" className="link-image" />
            </a>
        </li>
        
        <li>
            <a href="https://github.com/Brady-White" target="_blank" rel="noopener noreferrer" className="link-button">
                <img src={githubLogo} alt="LinkedIn" className="link-image" />
            </a>
        </li>
        <li>Link 3</li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;