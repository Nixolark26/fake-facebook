import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../utils/firebase";

function login() {
  //sign in with google

  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async (event) => {
    event.preventDefault();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      //   window.location.protocol + "//" + window.location.host;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login__main-container">
      <main className="login__main">
        <header className="login__main-header">
          <h1 className="login__main-header-title">facebook</h1>
          <p className="login__main-header-info1">
            Connect with friends and the world around you on Facebook.
          </p>
        </header>

        <div className="form-container">
          <form className="login__main-form">
            <input
              className="login__main-form-input-username"
              type="text"
              placeholder="Email or phone number"
              // onChange={createAccount}
              // value={message}
            />
            <input
              className="login__main-form-input-password"
              type="password"
              placeholder="Password"
            />
            <input
              onClick={login}
              className="login__main-form-input-submit"
              value="Log In"
              type="submit"
            />

            <button className="login__main-form-google" onClick={GoogleLogin}>
              <FcGoogle className="google-logo" /> Log in with google
            </button>
            <a class="login__main-form-a-forgotpassword" href="#">
              Forgot password?
            </a>
            <hr></hr>
            <button
              // onClick={createAccount}
              className="login__main-form-button-createaccount"
            >
              Create new account
            </button>
          </form>
          <p className="login__main-container-info2">
            <a href="#">Create a Page</a> for a celebrity, brand or business.
          </p>
        </div>
      </main>
    </div>
  );
}

export default login;
