import React from "react";
import "../styles/header.scss";
import {  Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="/">
          <img
            className="logo"
            src={require("../assets/img/cuplogo.png")}
            alt="로고"
          />
        </a>

        <div className="categories">
          <a href="../Pages/aboutPage_brand" className="nav">
            ABOUT
          </a>
              <Link to="/aboutPage_brand">MENU</Link>
          <span className="nav">NEWS</span>
          <span className="nav">SERVICE</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
