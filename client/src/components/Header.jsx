import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogged } from "../actions";

const Header = () => {
  const logStatus = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function logoutHandler(e){
    e.preventDefault();
    console.log("logout");
    dispatch(isLogged())
    navigate('/')
  }

  return (
    <div className="header-container">
      <div>
        <h1><Link to="/">Avanger's Book Store</Link></h1>
      </div>
      {logStatus ? (
        <div className="search">
          <input type="text" placeholder="Search by book or author name" />
          <button id="search-button">Search</button>
        </div>
      ) : (
        ""
      )}

      {logStatus ? (
        <div className="login-signup">
          <Link to="/logout" onClick={logoutHandler} id="logout">Logout</Link>
        </div>
      ) : (
        <div className="login-signup">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
export default Header;
