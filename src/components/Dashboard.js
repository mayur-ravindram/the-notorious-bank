import { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [transfers, setToTransfers] = useState(false);

  if (transfers === true) {
    return <Redirect to="/transfers" />;
  }
  const balance = "1,20,200.56";
  const email = "john@doe.com";
  const accountNumber = "A01xxx0876";
  return (
    <>
      <h1>Dashboard</h1>

      <div className="dashboard">
        <div className="dash-header">
          <div className="dash-main-header__heading">
            <div className="dash-main-header__heading-items">
              <div className="d-m-h-header">{accountNumber}</div>
              <div>
                <span>{email}</span>
              </div>
            </div>
            <div className="dash-main-header__heading-items">
              <div className="d-m-h-header">
                Balance Rs. <span>{balance}</span>
              </div>
            </div>
            <div className="dash-main-header__heading-items">Profile</div>
          </div>
        </div>
        <div className="dash-main">
          <div className="card-container">
            <div className="card-item">Manage Account</div>
            <div
              className="card-item"
              onClick={() => {
                setToTransfers(true);
              }}
            >
              Transfers
            </div>
            <div className="card-item">Other</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
