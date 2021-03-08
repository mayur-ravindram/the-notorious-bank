import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../App.css";

const RegistrationComponent = () => {
  const URL = "http://localhost:8010/api/bank/customer/onboard";

  // state logic
  const [toDashboard, setToDashboard] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [uid, setUid] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("uid change detected. verifying in DB");
  }, [uid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDashboard(true);
    //handleClick();
  };

  const payload = {
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    uid: uid,
    email: email,
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  const handleClick = () => {
    console.log(requestOptions.body);
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    setToDashboard(true);
  };

  if (toDashboard === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="registration-container">
      <div className="aside-header">
        <h1>ONBOARDING</h1>
        <p>let's get you onboard...</p>
      </div>
      <div className="onboarding-container">
        <div className="img-card"></div>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="fname">Participant Name</label>
            <div className="name-group">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="first name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="mname"
                name="middlename"
                placeholder="middle name.."
                onChange={(e) => setMiddleName(e.target.value)}
              />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="last name.."
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex-group">
            <div>
            <label htmlFor="gender">Gender</label>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
            <div>
              <label htmlFor="dob">D.O.B</label>
              <input type="date" onChange={(e) => setDob(e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter valid email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="aadhar">Aadhar ID</label>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="masked"
              title="16-digit number"
              onChange={(e) => setUid(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationComponent;
