import React from "react";
import GetBooks from "./GetBooks";
import Sidebar from "./Sidebar";
import "./Home.css";
import { useSelector } from "react-redux";
import { isLogged } from "../../actions";
const Home = () => {
  const loggedStatus = useSelector((state) => state.isLogged);
  return (
    <>
      {loggedStatus ? (
        <div className="home-user-container">
          <Sidebar />
          <GetBooks />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
