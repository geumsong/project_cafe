import React from "react";
import "../styles/pages/aboutPage_roasting.scss";
import { Link } from "react-router-dom";

const aboutPage_roasting = () => {
  return (
    <div>
      {/* 버튼 세 개 */}
      <div className="aboutNav">
        <div className="threeNav">
          <button className="notCheckButton">
            <Link to="/aboutPage_brand">브랜드소개</Link>
          </button>
          <button className="notCheckButton">
            <Link to="/aboutPage_coffee">마다메커피</Link>
          </button>
          <button className="checkButton">
            <Link to="/aboutPage_roasting">원두로스팅</Link>
          </button>
        </div>
      </div>

      {/* 사진 2개-1번째 */}
      <div className="roasting_pictureBox_a"></div>
      <div className="roasting_pictureBox_a"></div>

      {/* 2번째 사진 */}
      <div className="roasting_pictureBox_b_section">
        <div className="roasting_pictureBox_b"></div>
      </div>

      {/* 세번째사진 */}
      <div className="roasting_pictureBox_c">
        <div>
          <div className="circle_section">
            <div className="circle"></div>
          </div>
          <div className="two_circles_section">
            <div className="two_circles">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
      {/* 푸터 버튼 세 개 */}
      <div className="aboutNav_footer">
        <div className="aboutNav_footer_a">
          <div className="threeNav_footer">
            <button className="notCheckButton">
              <Link to="/aboutPage_brand">브랜드소개</Link>
            </button>
            <button className="notCheckButton">
              <Link to="/aboutPage_coffee">마다메커피</Link>
            </button>
            <button className="checkButton">
              <Link to="/aboutPage_roasting">원두로스팅</Link>
            </button>
          </div>
        </div>
        <button className="topButton">
          <img
            className="whiteTriangle"
            src={require("../assets/img/whiteTriangle.png")}
            alt="top버튼 화살표"
          />
          TOP
        </button>

      </div>
    </div>
  );
};

export default aboutPage_roasting;
