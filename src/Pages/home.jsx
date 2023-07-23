import React from "react";
import "../styles/pages/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* 메인이미지 */}
      <div className="mainBackgroundImage">
        <div className="mainBackgroundTitle">
          <span className="mainFirstTitleText">여름시즌 신메뉴 출시!</span>
          <img
            className="mainBigTitleText"
            src={require("../assets/img/summer.png")}
            alt="제목"
          />
          <Link to="/menu" className="goToNewMenu">
            <button className="goToNewMenuButton">신 메뉴 보러가기</button>
          </Link>
        </div>

        <div className="watermelonAndBlueText">
          <div className="watermelonLatte">
            <span className="name">워터멜론 라떼</span>
            <span className="englishName">Watermelon Latte</span>
            <span className="explanation">
              코코넛과 레몬, 그리고 초코를 넣은 {"\n"}상큼 달달한 라떼
            </span>
          </div>
          <div className="blueBeachLatte">
            <span className="name">블루 비치 라떼</span>
            <span className="englishName">Blue Beach Latte</span>
            <span className="explanation">
              블루티를 넣어 섞은 {"\n"}에티오피아 원두로 만든 라떼
            </span>
          </div>
        </div>
      </div>

      <div className="EmeraldLatteImage" src="" alt="에메랄드라떼" />
      <div className="chocoBeachLatteImage" src="" alt="초코비치라떼" />

      {/* 공지사항,이벤트 섹션 */}
      <div className="blackbox">
        <div className="noticeSection">
          <span className="noticeMainTitle">공지사항</span>
          <span className="noticeTitle">ㅇㅇㅇ일부 메뉴 가격 인상 안내</span>
          <div style={{ marginLeft: "120px" }}>
            <Link to="/newsNoticePage">
              <img
                className="plus"
                src={require("../assets/img/plus.png")}
                alt="공지사항 더보기"
              />
            </Link>
          </div>
        </div>
        <div className="noticeSection">
          <span className="noticeMainTitle">이벤트</span>
          <span className="noticeTitle">벚꽃시리즈 스템프 이벤트</span>
          <div style={{ marginLeft: "120px" }}>
            <Link to="newsEventPage">
              <img
                className="plus"
                src={require("../assets/img/plus.png")}
                alt="이벤트 더보기"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="secondBackground">
        <div className="threeMenues">
          <img
            className="menuFrames"
            src={require("../assets/img/firstFrame.png")}
            alt="첫 번째 음료"
          />
          <img
            className="menuFrames"
            src={require("../assets/img/secondFrame.png")}
            alt="두 번째 음료"
          />
          <img
            className="menuFrames"
            src={require("../assets/img/thirdFrame.png")}
            alt="세 번째 음료"
          />
        </div>
        <div className="secondTitle">
          <div>
            <div className="coffeeBean">
              Coffee Bean
              <div className="seeMore">
                <div style={{ textDecoration: "none" }}>
                  <Link to="/aboutPage_roasting">
                    <button className="moreCoffeeBeanButton">
                      자세히 보기
                      <img
                        className="narrow"
                        src={require("../assets/img/narrow.png")}
                        alt="narrow"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 세번째 */}
      {/* 커피메뉴 */}

      <div className="thirdBackgroundCoffee">
        <div className="coffeeMenuTopOver">
          <div className="coffeeMenuTop">
            <div className="coffeeDecorate">
              <div className="coffeeText">COFFEE</div>
              <div className="longCircle">
                <img
                  src={require("../assets/img/longCircle.png")}
                  alt="longCircle"
                />
              </div>
            </div>
            <div className="roundOrange">
              <img
                src={require("../assets/img/roundOrange.png")}
                alt="roundOrange"
              />
            </div>
            <div className="threeButtons">
              <div>
                <button className="seeMoreCoffeeMenuButton">
                  커피 메뉴 더 보기
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require("../assets/img/left.png")} alt="left" />
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require("../assets/img/right.png")} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fivePicturesTop">
          <div className="fivePictures">
            <div className="picturealign">
              <div className="pictures">
                <img
                  className="picturesCoffee"
                  src={require("../assets/img/iceAmericano.png")}
                  alt="아이스 아메리카노"
                />
              </div>
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/milkCafeLatte.png")}
                alt="연유 카페라떼"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/caramelMacchiato.png")}
                alt="카라멜 마끼아또"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/milkColdbrew.png")}
                alt="연유콜드브루"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/coldbrewWhiteVienna.png")}
                alt="콜드브루 화이트비엔나"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 세번째 */}
      {/* 음료메뉴 */}
      <div className="thirdBackgroundCoffee">
        <div className="coffeeMenuTopOver">
          <div className="coffeeMenuTop">
            <div className="coffeeDecorate">
              <div className="coffeeText">BEVERAGE</div>
              <div className="longCircle">
                <img
                  src={require("../assets/img/longCircle.png")}
                  alt="longCircle"
                />
              </div>
            </div>
            <div className="roundOrange">
              <img
                src={require("../assets/img/roundOrange.png")}
                alt="roundOrange"
              />
            </div>
            <div className="threeButtons">
              <div>
                <button className="seeMoreCoffeeMenuButton">
                  음료 메뉴 더 보기
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require("../assets/img/left.png")} alt="left" />
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require("../assets/img/right.png")} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fivePicturesTop">
          <div className="fivePictures">
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/bluemoonAde.png")}
                alt="블루문에이드"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img//shineHibiscus.png")}
                alt="샤인 히비스커스"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/strawberryLatte.png")}
                alt="딸기라떼"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/watermelonMohitoJuice.png")}
                alt="멜론 모히또주스"
              />
            </div>
            <div className="pictures">
              <img
                className="picturesCoffee"
                src={require("../assets/img/yujaPinacolada.png")}
                alt="유자 피나콜라다"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ㅇㅇ의 다양한 메뉴를 경험해보세요 */}
      <div className="four">
        <div className="blackSquare">
          <div className="tryMenu">ㅇㅇㅇ의 다양한 메뉴를 경험해보세요</div>
          <div>
            <Link to="/menu">
              <button className="seeMoreVariousMenu">
                더 많은 메뉴 보러가기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="cafeImage"></div>
    </div>
  );
};

export default Home;
