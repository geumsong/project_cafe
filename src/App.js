import "./styles/app.css";
import React from "react";
// import cup_logo from "./assets/img/cuplogo.png";

function App() {
  return (
    <div>
      <div className="header">
        <img
          className="logo"
          href=""
          src={require("./assets/img/cuplogo.png")}
          alt="로고"
        />
        <div className="categories">
          <span className="nav">ABOUT</span>
          <span className="nav">MENU</span>
          <span className="nav">NEWS</span>
          <span className="nav">SERVICE</span>
        </div>
      </div>

      {/* 메인이미지 */}
      <img className="mainImage" src="" alt="메인이미지" />
      <div>
        <div className="mainImageTitle">
          <span className="smallTitleText">여름시즌 신메뉴 출시!</span>
          <img
            className="bigTitleText"
            src={require("./assets/img/summer.png")}
            alt="제목"
          />
          {/* <div className="goToNewMenu" onClick={handleClick}>
            신 메뉴 보러가기
          </div> */}

          <a href="_blank">
            <button className="goToNewMenu">신 메뉴 보러가기</button>
          </a>
        </div>
      </div>

      {/* 줄바꿈하는방법? */}
      <div className="EmeraldPlusChoco">
        <div className="EmeraldLatte">
          <span className="name"> 에메랄드 라떼</span>
          <span className="englishName">Emerald Latte</span>
          <span className="explanation">
            코코넛과 레몬, 그리고 초코를 넣은 {"\n"}상큼 달달한 라떼
          </span>
        </div>
        <div className="chocoBeachLatte">
          <span className="name">초코 비치 라떼</span>
          <span className="englishName">Choco Beach Latte</span>
          <span className="explanation">
            초코시럽과 블루티를 넣어 {"\n"} 섞은 에티오피아 원두로 만든 라떼
          </span>
        </div>
      </div>
      <div className="EmeraldLatteImage" src="" alt="에메랄드라떼" />
      <div className="chocoBeachLatteImage" src="" alt="초코비치라떼" />

      <div className="blackbox">
        <div className="noticeSection">
          <span className="noticeMainTitle">공지사항</span>
          <span className="noticeTitle">ㅇㅇㅇ일부 메뉴 가격 인상 안내</span>
          <a href="" style={{ marginLeft: "120px" }}>
            <img
              className="plus"
              src={require("./assets/img/plus.png")}
              alt="공지사항 더보기"
            />
          </a>
        </div>
        <div className="noticeSection">
          <span className="noticeMainTitle">이벤트</span>
          <span className="noticeTitle">벚꽃시리즈 스템프 이벤트</span>
          <a href="" style={{ marginLeft: "120px" }}>
            <img
              className="plus"
              src={require("./assets/img/plus.png")}
              alt="이벤트 더보기"
            ></img>
          </a>
        </div>
      </div>
      <div className="secondBackground">
        <img
          className="checkPattern"
          src={require("./assets/img/backgroundCheckPattern.png")}
        />
        <div>
          <img
            className="menuFrames"
            src={require("./assets/img/firstFrame.png")}
            alt="첫 번째 음료"
          />
          <img
            className="menuFrames"
            src={require("./assets/img/secondFrame.png")}
            alt="두 번째 음료"
          />
          <img
            className="menuFrames"
            src={require("./assets/img/thirdFrame.png")}
            alt="세 번째 음료"
          />
        </div>
        <div className="secondTitle">
          <div className="coffeeBean">
            Coffee Bean
            <a href="_blank">
              <button className="moreCoffeeBeanButton">
                자세히 보기
                <img src={require("./assets/img/narrow.png")} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="thirdBackground">
          <div>
            <div className="namedCoffee">COFFEE</div>
            <img
              className="longCircle"
              src={require("./assets/img/longCircle.png")}
            />
            <img
              className="circleOrange"
              src={require("./assets/img/roundOrange.png")}
            />
          </div>
          <div>
            <div>
              <a href="">
                <button className="seeMoreCoffiesMenuButton">
                  커피 메뉴 더 보기
                </button>
              </a>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      {/*
      </div>
      <div className="secondMainImage">
        <div className="imageOne" src="" />
        <div className="imageTwo" src="" />
        <div className="imageThree" src="" />
        <h1>Coffee Bean</h1>
        <div className="look" onclick="" />
        <div className="secondBackground" src="" />
      </div>
      <div className="menuComponent">
        <div className="menuBackgroundImage" src="" />
        <div className="titleCoffee">COFFEE.</div>
        <div
          className="seeMoreCoffeeies"
          onclick=""
          value="커피 메뉴 더 보기"
        />
        <div className="leftRightButtons">
          <div className="leftButton" onclick="" src="" />
          <div className="rightButton" onclick="" src="" />
          <div className="coffeeMenuImages">
            <div className="coffeeImageOne" src="" />
            <div className="coffeeImageTwo" src="" />
            <div className="coffeeImageThree" src="" />
            <div className="coffeeImageFour" src="" />
          </div>
        </div>
        <div className="beverageBackgroundImage" src="" />
        <div className="titleBeverage">BEVERAGE.</div>
        <div
          className="seeMoreBeverages"
          onclick=""
          value="음료 메뉴 더 보기"
        />
        <div className="leftRightButtons">
          <div className="leftButton" onclick="" src="" />
          <div className="rightButton" onclick="" src="" />
          <div className="BeverageMenuImages">
            <div className="BeverageImageOne" src="" />
            <div className="BeverageImageTwo" src="" /> 
            <div className="BeverageImageThree" src="" />
            <div className="BeverageImageFour" src="" />
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default App;
