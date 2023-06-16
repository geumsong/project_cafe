import React from "react";
import "../styles/header.scss";

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

        <div className="categories" >
          <div className="nav">
            <a href="../Pages/aboutPage_brand">ABOUT</a>
          </div>
          <div className="nav">
            <a href="./Pages/menu.js">MENU</a>
          </div>
          <span className="nav">NEWS</span>
          <span className="nav">SERVICE</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
