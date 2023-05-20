import React from "react";
import "./home.css";

function Home() {
  return (
    <header>
      <nav>
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
            <li className="top-nav__elements">
              <i class="fa-solid fa-user"></i>
            </li>
          </div>
        </ul>
        <ul className="left-nav">
          <li className="left-nav__elements">
            <i class="fa-solid fa-house"></i>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-user"></i>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-brands fa-youtube"></i>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-user-group"></i>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-store"></i>
          </li>
          <li className="left-nav__elements">
            <i class="fa-solid fa-gamepad"></i>
          </li>
          <li className="left-nav__elements all">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-solid fa-users-line"></i>
          </li>
          <hr />
          <li className="left-nav__elements">
            <i class="fa-solid fa-paperclip"></i>
          </li>
        </ul>
      </nav>
      <main></main>
    </header>
  );
}

export default Home;
