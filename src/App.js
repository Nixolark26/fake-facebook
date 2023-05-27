import "./App.css";
import { useState } from "react";
import Home from "./routes/home/Home";
import Login from "./routes/home/Login";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./utils/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  let [user, loading] = useAuthState(auth);
  //scroll to the top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {user && <Home />}
      {!user && <Login />}
    </div>
  );
}

export default App;
