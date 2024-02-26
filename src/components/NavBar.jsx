import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container"> {/* Wrap logo in a container */}
          <Link to="/" className="navbar-logo">
            <img src="../../images/MicrosoftTeams-image.png" alt="Logo" />
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item mx-6">
            <Link to="/" className="navbar-link">
              HOME
            </Link>
          </li>

          <li
            className="navbar-item mx-6"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="navbar-link">What is Autism</span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/what-is-autism">What is Autism?</Link>
                {/* Add other article links as needed */}
              </div>
            )}
          </li>
          {/* Add more navigation items as needed */}

          <li className="navbar-item mx-6">
            <Link to="/support" className="navbar-link">
              SUPPORT
            </Link>
          </li>
          <li className="navbar-item mx-6">
            <Link to="/events" className="navbar-link">
              EVENTS
            </Link>
          </li>
          <li className="navbar-item mx-6">
            <Link to="/services" className="navbar-link">
              SERVICE
            </Link>
          </li>
          <li className="navbar-item mx-6">
            <Link to="/blog/1" className="navbar-link">
              BLOG
            </Link>
          </li>
        </ul>

        <div className="navbar-sign">
          <Link to="/signin" className="navbar-signin">
            SIGN IN
          </Link>
          <Link to="/SignUp">
            <button className="navbar-create">CREATE</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
