import React from 'react';
import './navbar.css';
import homeIcon from '../../assets/icons/icon-home.png';

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="svac.png" alt="logo" className="navbar-logo" />
        <span className="navbar-appname">Bojja'sPlayfy</span>

        {/* Updated Home Button */}
        <button className="navbar-homebutton" onClick={onHomeClick}>
          <img src={homeIcon}
               alt="Home Icon" className="home-icon"/>
        </button>
      </div>

      <div className="navbar-middle">
        <h1>SVAC-Playfy-Sri-Venkateswaraswamy-Suprabatham</h1>
      </div>

      <div className="navbar-right">
        <img src="svac.png" alt="logo" className="navbar-logo1" />
      </div>
    </nav>
  );
};

export default Navbar;