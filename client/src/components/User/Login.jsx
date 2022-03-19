import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { isLogged } from "../../actions";

const Login = () => {
  const logStatus = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function changeLogState(){
    dispatch(isLogged())
    console.log(logStatus);
  }

  function loginHandler(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if(res.status===200){
          console.log("you can log in now");
          changeLogState()
          navigate("/user")

        }
      })
      .catch((err) => {
        console.log("i am in err",err);
        console.log(err.message);
      });
  }
  return (
    <>
    {
      logStatus
      ?''
      :
      <div className="signup-container">
      <form onSubmit={loginHandler}>
        <h3>Login</h3>

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

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
      </form>
    </div>
    }
    
    </>
  );
};

export default Login;
