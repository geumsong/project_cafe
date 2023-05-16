import React from 'react';
import '../styles/header.css';

const Header = () => {
  // 공부해라
  return (
    <div className="header">
      <img
        className="logo"
        src={require('../assets/img/cuplogo.png')}
        alt="로고"
      />
      <div className="categories">
        <span className="nav"></span>
        <span className="nav">MENU</span>
        <span className="nav">NEWS</span>
        <span className="nav">SERVICE</span>
      </div>
    </div>
  );
};

export default Header;