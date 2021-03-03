import React from "react";
import "./App.css";
import RegistrationComponent from "./components/RegistrationComponent";
function App() {
  return (
    <>
      <div className="container">
        <header>The Notorious Bank</header>
        <main>
          <div></div>
          
          <div>
            <h1>Register</h1>
            <RegistrationComponent />
          </div>
          <div></div>
        </main>
        <footer>Made with 💘 by @MayurRavindram</footer>
      </div>
    </>
  );
}

export default App;
