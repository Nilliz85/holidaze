import React from 'react';
import './header-section.styles.scss'; 

const Header = () => {
  return (
<header className="header">
  <div className="logo">Holidaze</div>
  <div className="search-bar">
    <input type="search" placeholder="Search trips & destinations..." />
    <div className='searchicon'><i className="fi fi-rr-search"></i></div>
  </div>
  <nav className="navigation">
    <div className="nav-item"><i className="fi fi-rr-square-phone-hangup iconsize"></i> Contact</div>
    <div className="nav-item"><i className="fi fi-rr-suitcase-alt iconsize"></i> My Trips</div>
    <div className="nav-item carticon"><i className="fi fi-rr-shopping-cart"></i></div>
    <button className="nav-button">Log In</button>
  </nav>
</header>

  );
};

export default Header;
