import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

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
  return (
    <ul className="top-nav">
      <li onClick={goToHome} className="top-nav__elements logo">
        facebook
      </li>
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

        <li onClick={goToMyProfile} className="top-nav__elements">
          <img className="top-myprofile" src={user?.photoURL} />
        </li>
      </div>
    </ul>
  );
}

export default HomeTopNav;
