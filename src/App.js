import React from "react";
import "./App.css";
import RegistrationComponent from "./components/RegistrationComponent";
function App() {
  return (
    <>
      <div className="container">
        <header>The Notorious Bank</header>
          <h1>CUSTOMER ONBOARDING</h1>
        <main>

          <div></div>
          <div className="mid-content">
            <div className="img-card"></div>
            
            <RegistrationComponent />
          </div>
        </main>
        <footer>Made with 💘 by @MayurRavindram</footer>
      </div>
    </>
  );
}

export default App;
