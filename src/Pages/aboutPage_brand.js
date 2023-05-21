import React from "react";
import "../styles/pages/aboutPage_brand.css";
import { Link } from "react-router-dom";

const aboutPage_brand = () => {
  return (
    <div>
      {/* 버튼 세 개 */}
      <div className="aboutNav">
        <div className="threeNav">
          <button className="checkButton">
            <Link to="/aboutPage_brand">브랜드소개</Link>
          </button>
          <button className="notCheckButton">
            <Link to="/aboutPage_coffee">마다메커피</Link>
          </button>
          <button className="notCheckButton">원두로스팅</button>
        </div>
      </div>

      <div className="firstImage"></div>
      <div className="storyOne">
        <div className="storyOneTextGroup">
          <span className="storyOnefirstLine">
            동네마다 알게모르게 우리 곁을 둘러싸고있는
          </span>
          <span className="storyoneSecondLine">정겨운 것들이 있습니다.</span>
        </div>
        <div className="floatingGroup_a">
          <div className="floatingImage_a"></div>
        </div>
      </div>
      <div className="graybox_a">
        <div className="floatingImage_b"></div>
      </div>
      <div className="spacebox_a"></div>
      <div className="graybox_b"></div>
      <div className="spacebox_b"></div>
      <div className="floatingGroup_b">
        <div className="floatingImage_c"></div>
      </div>
      <div className="aboutNav_footer">
        <div className="aboutNav_footer_a">
          <div className="threeNav_footer">
            <button className="checkButton">
              <Link to="/aboutPage_brand">브랜드소개</Link>
            </button>
            <button className="notCheckButton ">
              <Link to="/aboutPage_coffee">마다메커피</Link>
            </button>
            <button className="notCheckButton ">원두로스팅</button>
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

export default aboutPage_brand;
