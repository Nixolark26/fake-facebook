import React from "react";
import { Link } from "react-router-dom";

function HomeTopNav() {
  return (
    <ul className="top-nav">
      <li className="top-nav__elements logo">facebook</li>
      <div className="search-container">
        <li className="top-nav__elements">
          <i class="fa-solid fa-magnifying-glass"></i>
        </li>
        <input type="search" placeholder="Search in Facebook" />
      </div>

      <div className="top-nav__elements-container">
        <li className="top-nav__elements">
          <i class="fa-brands fa-facebook-messenger"></i>
        </li>
        <li className="top-nav__elements">
          <i class="fa-solid fa-bell"></i>
        </li>
        <Link
          to={
            window.location.protocol +
            "//" +
            window.location.host +
            "my-profile"
          }
        >
          <li className="top-nav__elements">
            <i class="fa-solid fa-user"></i>
          </li>
        </Link>
      </div>
    </ul>
  );
}

export default HomeTopNav;
