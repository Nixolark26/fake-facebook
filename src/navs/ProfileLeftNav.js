import React from "react";
import "./HomeLeftNav.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function HomeLeftNav() {
  const [user, loading] = useAuthState(auth);
  function goToMyProfile() {
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
    <ul className="profile-left-nav">
      <li onClick={goToHome} className="profile-left-nav__elements">
        <i class="fa-solid fa-house"></i>
      </li>
      <li onClick={goToMyProfile} className="profile-left-nav__elements">
        <img className="profile-left-myprofile" src={user?.photoURL} />
      </li>
      <hr />
      <li className="profile-left-nav__elements">
        <i class="fa-brands fa-youtube"></i>
      </li>
      <li className="profile-left-nav__elements">
        <i class="fa-solid fa-user-group"></i>
      </li>
      <li className="profile-left-nav__elements">
        <i class="fa-solid fa-store"></i>
      </li>
      <li className="profile-left-nav__elements">
        <i class="fa-solid fa-gamepad"></i>
      </li>
      <li className="profile-left-nav__elements ">
        <div className="all">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </li>
      <hr />
      <li className="profile-left-nav__elements">
        <i class="fa-solid fa-users-line"></i>
      </li>
      <hr />
      <li className="profile-left-nav__elements">
        <i class="fa-solid fa-paperclip"></i>
      </li>
    </ul>
  );
}

export default HomeLeftNav;
