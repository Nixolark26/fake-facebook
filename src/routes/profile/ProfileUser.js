import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import ProfileLeftNav from "../../navs/ProfileLeftNav";
import HomeTopNav from "../../navs/HomeTopNav";
import ProfilePosts from "../profile/ProfilePosts";
import "./ProfileUser.css";
import "../../navs/ProfileLeftNav.css";
// import EditProfile from "./EditProfile";
import "./EditProfile.css";

function ProfileUser() {
  const [user, loading] = useAuthState(auth);
  // if ((window.location.href = "http://localhost:3000/my-profile")) {
  // }
  if (!loading) {
    if (!user) {
      window.location.href =
        window.location.protocol + "//" + window.location.host;
    }
  }

  const [show, setShow] = useState(false);
  const editProfile = (e) => {
    setShow(!show);
  };

  function acceptChanges() {
    editProfile();
  }

  return (
    <main>
      {show && (
        <div className="edit-profile-container">
          <div className="edit-profile-form-container">
            <form className="edit-profile-form">
              <span>Username</span>
              <input type="text" placeholder="Enter new username" />
              <span>Photo</span>
              <input type="text" placeholder="Enter URL for new photo" />
              <button onClick={acceptChanges}>Accept</button>
            </form>
          </div>
        </div>
      )}
      <HomeTopNav />
      {user && (
        <div className="profile-container">
          <ProfileLeftNav />
          <section className="profile">
            <img
              className="profile-background"
              src="https://tecnovortex.com/wp-content/uploads/2019/04/wallpaper-engine.jpg"
            />
            <img
              className="profile-photo"
              src={user?.photoURL}
              alt={user?.displayName + "'s photo"}
            />
            <p className="profile-name">{user.displayName}</p>

            <p className="profile-friends">100 friends</p>
            <button onClick={editProfile} className="edit-profile">
              <i class="fa-solid fa-pen"></i>Edit profile
            </button>
            <div className="profile-posts-container">
              <ProfilePosts />
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default ProfileUser;
