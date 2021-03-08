import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";
import RegistrationComponent from "./components/RegistrationComponent";
import TransferComponent from "./components/TransferComponent";
function App() {
  return (
    <>
      <div className="container">
        <header>
          The Notorious Bank
        </header>

        <main>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/register">
            <RegistrationComponent />
          </Route>
          {/* <div className="mid-content"></div> */}
        </main>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/transfers">
          <TransferComponent />
        </Route>
      </div>
      <footer>Made with 💘 by @MayurRavindram</footer>
    </>
  );
}

export default App;
