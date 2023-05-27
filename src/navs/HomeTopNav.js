import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import "./HomeTopNav.css";

function HomeTopNav() {
  const [user, loading] = useAuthState(auth);
  function goToMyProfile() {
    auth.signOut();
    if ((window.location.href = "http://localhost:3000/my-profile")) {
      return;
    } else {
      window.location.href = "http://localhost:3000/my-profile";
    }
  }

  function goToHome() {
    if ((window.location.href = "http://localhost:3000/")) {
      return;
    } else {
      window.location.href = "http://localhost:3000/";
    }
  }
  const [show, setShow] = useState(false);
  function search(e) {
    let searchContainer = document.querySelector(".search-container");
    e.preventDefault();
    setShow(!show);
    if (!show) {
      searchContainer.style.width = "300px";
    } else {
      searchContainer.style.width = "unset";
    }
  }
  return (
    <ul className="top-nav">
      <li className="logo-container">
        <span onClick={goToHome} className="top-nav__elements logo" s>
          facebook
        </span>
        <div className="search-container">
          <li className="top-nav__elements">
            <i class="fa-solid fa-magnifying-glass" onClick={search}></i>
          </li>
          {show && <input type="search" placeholder="Search in Facebook" />}
        </div>
      </li>
      <div className="top-nav__elements-container">
        <li className="top-nav__elements">
          <i class="fa-brands fa-facebook-messenger"></i>
        </li>
        <li className="top-nav__elements">
          <i class="fa-solid fa-bell"></i>
        </li>
        <li onClick={goToMyProfile} className="top-nav__elements">
          <img className="top-myprofile" src={user?.photoURL} />
        </li>
      </div>
    </ul>
  );
}

export default HomeTopNav;
