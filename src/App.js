import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  //scroll to the top
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  function login() {
    alert("Login");
  }

  function createAccount(event) {
    // event.preventDefault();
    setMessage(event.target.value);
    console.log(event.target.value);
  }

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
              onChange={createAccount}
              value={message}
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
            <a class="login__main-form-a-forgotpassword" href="#">
              Forgot password?
            </a>
            <hr></hr>
            <button
              onClick={createAccount}
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

export default App;
