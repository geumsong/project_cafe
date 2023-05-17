import React from "react";
import "../styles/pages/aboutpage.css";

const aboutPage = () => {
  return (
    <div className="aboutNav">
      <div className="threeNav">
        <button className="introduceBrand">브랜드소개</button>
        <button className="madameCoffee">마다메커피</button>
        <button className="roastingBean">원두로스팅</button>
      </div>
    </div>
    // 에러발생 여기서부터
    <div className="firstImage">hjhj</div>

  );
};

export default aboutPage;
