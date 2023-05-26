import React from "react";

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
    <ul className="left-nav">
      <li onClick={goToHome} className="left-nav__elements">
        <i class="fa-solid fa-house"></i> <span>Home</span>
      </li>
      <li onClick={goToMyProfile} className="left-nav__elements">
        <img className="left-myprofile" src={user?.photoURL} />
        <span>My profile</span>
      </li>
      <hr />
      <li className="left-nav__elements">
        <i class="fa-brands fa-youtube"></i> <span>Watch</span>
      </li>
      <li className="left-nav__elements">
        <i class="fa-solid fa-user-group"></i> <span>Friends</span>
      </li>
      <li className="left-nav__elements">
        <i class="fa-solid fa-store"></i> <span>Store</span>
      </li>
      <li className="left-nav__elements">
        <i class="fa-solid fa-gamepad"></i> <span>Games</span>
      </li>
      <li className="left-nav__elements ">
        <div className="all">
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        <span>See all</span>
      </li>
      <hr />
      <li className="left-nav__elements">
        <i class="fa-solid fa-users-line"></i> <span>See all Groups</span>
      </li>
      <hr />
      <li className="left-nav__elements">
        <i class="fa-solid fa-paperclip"></i>
        <span>See all shorcuts</span>
      </li>
    </ul>
  );
}

export default HomeLeftNav;
