import React from 'react';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div>
      {/* 메인이미지 */}
      <img className="mainImage" src="" alt="메인이미지" />
      <div>
        <div className="mainImageTitle">
          <span className="smallTitleText">여름시즌 신메뉴 출시!</span>
          <img
            className="bigTitleText"
            src={require('../assets/img/summer.png')}
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
            코코넛과 레몬, 그리고 초코를 넣은 {'\n'}상큼 달달한 라떼
          </span>
        </div>
        <div className="chocoBeachLatte">
          <span className="name">초코 비치 라떼</span>
          <span className="englishName">Choco Beach Latte</span>
          <span className="explanation">
            초코시럽과 블루티를 넣어 {'\n'} 섞은 에티오피아 원두로 만든 라떼
          </span>
        </div>
      </div>
      <div className="EmeraldLatteImage" src="" alt="에메랄드라떼" />
      <div className="chocoBeachLatteImage" src="" alt="초코비치라떼" />

      <div className="blackbox">
        <div className="noticeSection">
          <span className="noticeMainTitle">공지사항</span>
          <span className="noticeTitle">ㅇㅇㅇ일부 메뉴 가격 인상 안내</span>
          <div style={{ marginLeft: '120px' }}>
            <img
              className="plus"
              src={require('../assets/img/plus.png')}
              alt="공지사항 더보기"
            />
          </div>
        </div>
        <div className="noticeSection">
          <span className="noticeMainTitle">이벤트</span>
          <span className="noticeTitle">벚꽃시리즈 스템프 이벤트</span>
          <div style={{ marginLeft: '120px' }}>
            <img
              className="plus"
              src={require('../assets/img/plus.png')}
              alt="이벤트 더보기"
            ></img>
          </div>
        </div>
      </div>

      <div className="secondBackground">
        <div className="threeMenues">
          <img
            className="menuFrames"
            src={require('../assets/img/firstFrame.png')}
            alt="첫 번째 음료"
          />
          <img
            className="menuFrames"
            src={require('../assets/img/secondFrame.png')}
            alt="두 번째 음료"
          />
          <img
            className="menuFrames"
            src={require('../assets/img/thirdFrame.png')}
            alt="세 번째 음료"
          />
        </div>
        <div className="secondTitle">
          <div>
            <div className="coffeeBean">
              Coffee Bean
              <div className="seeMore">
                <div style={{ textDecoration: 'none' }}>
                  <button className="moreCoffeeBeanButton">
                    자세히 보기
                    <img
                      className="narrow"
                      src={require('../assets/img/narrow.png')}
                      alt="narrow"
                    />
                  </button>
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
                  src={require('../assets/img/longCircle.png')}
                  alt="longCircle"
                />
              </div>
            </div>
            <div className="roundOrange">
              <img
                src={require('../assets/img/roundOrange.png')}
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
                  <img src={require('../assets/img/left.png')} alt="left" />
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require('../assets/img/right.png')} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fivePicturesTop">
          <div className="fivePictures">
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
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
                  src={require('../assets/img/longCircle.png')}
                  alt="longCircle"
                />
              </div>
            </div>
            <div className="roundOrange">
              <img
                src={require('../assets/img/roundOrange.png')}
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
                  <img src={require('../assets/img/left.png')} alt="left" />
                </button>
              </div>
              <div>
                <button className="goButton">
                  <img src={require('../assets/img/right.png')} alt="right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="fivePicturesTop">
          <div className="fivePictures">
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
              />
            </div>
            <div>
              <img
                className="pictures"
                src={require('../assets/img/box.png')}
                alt="pictures"
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
            <button className="seeMoreVariousMenu">
              더 많은 메뉴 보러가기
            </button>
          </div>
        </div>
      </div>
      <div className="cafeImage"></div>
      {/* footer */}
      <div className="footerBackground">
        <div className="firstLine">
          <div className="cs">
            <div className="csCenter">고객센터</div>
            <div className="csCenterNumber">010. 5105. 4167</div>
          </div>
          <div>
            <div className="sns">
              <img
                className="pigNarrow"
                src={require('../assets/img/narrowDec.png')}
                alt="돼지꼬리화살표"
              />
              <div className="followSns">
                <div className="followUs">FOLLOW US!</div>
                <div className="snsLink">
                  <div>
                    <img
                      className="snsImage"
                      src={require('../assets/img/youtube.png')}
                      alt="유튜브"
                    />
                  </div>
                  <div>
                    <img
                      className="snsImage"
                      src={require('../assets/img/instagram.png')}
                      alt="인스타"
                    />
                  </div>
                  <div>
                    <img
                      className="snsImage"
                      src={require('../assets/img/facebook.png')}
                      alt="페이스북"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="textMargin">
          <div>
            <span className="mainClick">공지사항</span>
            <span className="mainClick">가맹점문의</span>
            <span className="mainClick">찾아오시는길</span>
            <span className="mainClick">개인정보처리방침</span>
            <span className="mainClick">이용약관</span>
          </div>
          <div className="serve">
            <span className="serveText">사업자등록번호:185-75-55293</span>
            <span className="serveText">대표:이금송</span>
            <span className="serveText">서울시 금송구 금송1길 25</span>
            <span className="serveText">TEL:010.5105.4167</span>
            <span className="serveText">개인정보책임자:덱스</span>
          </div>
          <div className="copyright">ⓒㅇㅇㅇCoffee.All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
