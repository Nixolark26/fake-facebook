import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import HomeLeftNav from "../../navs/HomeLeftNav";
import HomeTopNav from "../../navs/HomeTopNav";
import ProfilePosts from "../profile/ProfilePosts";
import "./ProfileUser.css";
import "./ProfileLeftNav.css";

function ProfileUser() {
  const [user, loading] = useAuthState(auth);

  return (
    <main>
      <HomeTopNav />
      <HomeLeftNav />

      {user && (
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
          <br></br>

          <p className="profile-friends">100 friends</p>

          <button className="edit-profile">
            <i class="fa-solid fa-pen"></i>Edit profile
          </button>

          <div className="profile-posts-container">
            <ProfilePosts />
          </div>
        </section>
      )}
    </main>
  );
}

export default ProfileUser;
