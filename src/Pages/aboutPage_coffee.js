import React from "react";
import "../styles/pages/aboutPage_coffee.css";
import { Link } from "react-router-dom";

const aboutPage_coffee = () => {
  return (
    <div>
      {/* 버튼 세 개 */}
      <div className="aboutNav">
        <div className="threeNav">
          <button className="notCheckButton">
            <Link to="/aboutPage_brand">브랜드소개</Link>
          </button>
          <button className="checkButton">
            <Link to="/aboutPage_coffee">마다메커피</Link>
          </button>
          <button className="notCheckButton">
            <Link to="/aboutPage_roasting">원두로스팅</Link>
          </button>
        </div>
      </div>

      {/* 메인 상단 텍스트 */}
      <div className="storyOneTextGroup">
        <span className="storyOnefirstLine">
          아주 느리게 흘러가는 새로운 시간의 방식
        </span>
        <span className="storyoneSecondLine">
          우리 동네 베네캣의 하루, {"\n"}함께 떠나볼까요?
        </span>
      </div>

      {/* 사진1 */}
      <div className="pictureBox_a_section">
        <div className="pictureBox_a"></div>
      </div>

      {/* 사진2 */}
      <div className="pictureBox_b_section">
        <div className="pictureBox_b">
          <div className="grayBox_c"></div>
        </div>
      </div>

      {/* 사진3 */}
      <div className="pictureBox_a_section">
        <div className="pictureBox_a"></div>
      </div>

      {/* 사진4 */}
      <div className="pictureBox_d"></div>

      {/* 사진5 */}
      <div className="pictureBox_e_section">
        <div className="pictureBox_e"></div>
      </div>

      {/* 푸터 버튼 세 개 */}
      <div className="aboutNav_footer">
        <div className="aboutNav_footer_a">
          <div className="threeNav_footer">
            <button className="notCheckButton">
              <Link to="/aboutPage_brand">브랜드소개</Link>
            </button>
            <button className="checkButton">
              <Link to="/aboutPage_coffee">마다메커피</Link>
            </button>
            <button className="notCheckButton ">
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

export default aboutPage_coffee;
