import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import "./HomeTopNav.css";

function HomeTopNav() {
  const [user, loading] = useAuthState(auth);
  const [show, setShow] = useState(false);
  const [showMore, setShowMore] = useState(false);
  // function goToMyProfile() {
  //   if ((window.location.href = "http://localhost:3000/my-profile")) {
  //     return;
  //   } else {
  //     window.location.href = "http://localhost:3000/my-profile";
  //   }
  // }
  const profileContainer = document.querySelector(".profile-container");
  console.log(profileContainer);

  function logout() {
    auth.signOut();
  }

  function goToHome() {
    if ((window.location.href = "http://localhost:3000/")) {
      return;
    } else {
      window.location.href = "http://localhost:3000/";
    }
  }
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

  if (showMore) {
    setTimeout(() => {
      const moreLogoutContainer = document.querySelector(
        ".more-logout-container"
      );
      moreLogoutContainer.addEventListener("mouseleave", () => {
        // alert();

        window.addEventListener("click", () => {
          if (!showMore) {
            return;
          } else {
            setShowMore(!showMore);
            // console.log("window" + showMore);
          }
        });
      });
    }, 100);
  }

  function seeMore() {
    setTimeout(() => {
      if (!showMore) setShowMore(!showMore);
      // console.log("button" + showMore);
    }, 100);
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
        <li onClick={seeMore} className="top-nav__elements">
          <img className="top-myprofile" src={user?.photoURL} />
        </li>
        {showMore && (
          <div className="more-logout-container">
            <span>{user?.displayName}</span>

            <br></br>
            <div className="logout-container">
              <span className="logout-button" onClick={logout}>
                Logout
              </span>
            </div>
          </div>
        )}
      </div>
    </ul>
  );
}

export default HomeTopNav;
