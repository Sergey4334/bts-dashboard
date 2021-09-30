import React from "react";
import './header.css';
import iconAuth from './user.png';
import iconLogout from './logout.png';


const Header = () => {
  return (
    <div className="header container">
      <nav className="nav-header">
        <ul className="nav-list df">
          <li>DASHBOARD</li>
          <li>INSTANCES</li>
          <li>PAIRS</li>
          <li>ABOUT</li>
          <li>HELP</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className="auth-block df">
        <div className="icon-auth">
          <img src={iconAuth} alt="Auth icon" width="30" />
        </div>
        <div className="logout-auth">
          <button className="btn-logout">logout <img src={iconLogout} alt="Logout"  width="10"/></button>
        </div>
      </div>
    </div>
  );
}
export default Header;