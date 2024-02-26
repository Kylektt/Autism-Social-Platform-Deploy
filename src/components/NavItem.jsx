import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ title, link, sublinks }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <li
      className="navbar-item mx-6"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <span className="navbar-link">{title}</span>
      {sublinks && isDropdownOpen && (
        <div className="dropdown-content">
          {sublinks.map((sublink) => (
            <Link key={sublink.link} to={sublink.link}>
              {sublink.title}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavItem;
