import React from "react";
import "../styles/header.scss";
import { Link } from "react-router-dom";

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
          <div className="nav">
            <Link to="/aboutPage_brand">ABOUT</Link>
          </div>
          <div className="nav">
            <Link to="/menu">MENU</Link>
          </div>
          <span className="nav">
            <Link to="/newsNoticePage">NEWS</Link>
          </span>
          <span className="nav">
          <Link to="/serviceAffiliationInquiryPage">SERVICE</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
