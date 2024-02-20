import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './NavBar.css';

function NavBar() {
  let location = useLocation();
  let showSignInLink = location.pathname !== "/signin";

  // State to manage dropdown visibility
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {showSignInLink && (
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              <img src="../../images/MicrosoftTeams-image.png" alt="Logo" />
            </Link>

            <ul className="navbar-menu">
              {/* "What is Autism" dropdown */}
              <li
                className="navbar-item mx-6"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <span className="navbar-link">What is Autism</span>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <Link to="/what-is-autism-article">What is Autism?</Link>
                    <Link to="/autism-spectrum-article">Autism Spectrum</Link>
                    <Link to="/characteristics-of-autism-article">Characteristics of Autism</Link>
                    <Link to="/aspergers-syndrome-article">Asperger’s Syndrome</Link>
                    <Link to="/positive-self-identity-article">Positive Self-Identity</Link>
                    <Link to="/neurodiversity-movement-article">Neurodiversity Movement</Link>
                    <Link to="/prevalence-of-autism-article">Prevalence of Autism</Link>
                    <Link to="/history-of-autism-article">History of Autism</Link>
                    <Link to="/causes-of-autism-article">Causes of Autism</Link>
                    <Link to="/facts-and-misconceptions-article">Facts and Misconceptions</Link>
                    <Link to="/broaching-autism-subject-article">Broaching Autism Subject</Link>
                    {/* Add more links as needed */}
                  </div>
                )}
              </li>

              {/* Other navbar items */}
              
              <li className="navbar-item mx-6">
                <Link to="/" className="navbar-link">
                  HOME
                </Link>
              </li>

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
      )}
    </>
  );
}

export default NavBar;
