import React from "react";
import "./home.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";
import HomeTopNav from "../../navs/HomeTopNav";
import HomeLeftNav from "../../navs/HomeLeftNav";
import HomeRightNav from "../../navs/HomeRightNav";
import HomePosts from "../home/posts/HomePosts";

function Home() {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      {user && (
        <div>
          <header>
            <nav>
              <HomeTopNav />
            </nav>
          </header>
          <main className="posts-container">
            <HomeLeftNav />
            <HomePosts />
            <HomeRightNav />
          </main>
        </div>
      )}
    </div>
  );
}

export default Home;
