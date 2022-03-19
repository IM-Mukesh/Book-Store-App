import React, { useState } from "react";
import "./login-signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Signup = () => {
  // const history = useHistory();
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked on register button");
    console.log(name, email, phone, password);
    // if(name&&email&&phone&&password)

    axios
      .post("http://localhost:5000/user/register", {
        name: name,
        email: email,
        phone: phone,
        password: password,
      })
      .then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={submitHandler}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            id="phone"
            className="form-control"
            pattern="[0-9]{10}"
            placeholder="Enter Phone"
            required="true"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Popup
          trigger={
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
          }
          position="right center"
        >
          <div>Popup content here !!</div>
        </Popup>
        {/* <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button> */}
        <p className="forgot-password text-right">
          Already registered <Link to="/login">log in?</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
