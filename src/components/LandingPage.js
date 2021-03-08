import { useState } from "react";
import { Redirect } from "react-router-dom";

const LandingPage = () => {
  const [register, setToRegister] = useState(false);

  if (register === true) {
    return <Redirect to="/register" />;
  }
  return (
    <>
      <div>
        <h1>Welcome to The Notorious Bank!</h1>
        <div className="card-container">
          <div className="card-item" onClick={() => setToRegister(true)}>
            Onboard a Customer
          </div>
          <div className="card-item">Log in</div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default LandingPage;
