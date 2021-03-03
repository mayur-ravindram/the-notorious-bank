import "../App.css";

const RegistrationComponent = () => {
  const URL = "http://localhost:8010/api/bank/customer/onboard";

  const payload = {
    firstName: "Jany",
    middleName: "S",
    lastName: "Dow",
    dob: "1908-05-15",
    gender: "FEMALE",
    uid: 1221,
    email: "ass@night.com",
  };
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  };

  const handleClick = () => {
    console.log("clicked");
    fetch(URL, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <h3>This is Registration Component</h3>

      <label for="fname">Name</label>
      <div className="name-group">
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="first name.."
        />
        <input
          type="text"
          id="mname"
          name="middlename"
          placeholder="middle name.."
        />
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="last name.."
        />
      </div>
      <br />
      <br />
      <label for="gender">Gender</label>
      <div className="gender-group">
        <input type="radio" id="male" name="gender" value="male" />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other" />
        <label for="other">Other</label>
      </div>
      <br />
      <br />

      <label for="dob">Date of Birth</label>
      <input type="date" />

      <label for="email">Email</label>
      <input type="email" />

      <label for="aadhar">Aadhar ID</label>
      <input
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        pattern="\d{4} \d{4} \d{4} \d{4}"
        class="masked"
        title="16-digit number"
      />

      <input type="submit" value="Submit" onClick={handleClick} />
    </>
  );
};

export default RegistrationComponent;
