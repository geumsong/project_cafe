import "./styles/app.css";

function App() {
  return (
    <div>
      <div className="header">
        <image className="logo" src="" alt="로고" />
        <div className="categories">
          <span className="nav">ABOUT</span>
          <span className="nav">MENU</span>
          <span className="nav">NEWS</span>
          <span className="nav">SERVICE</span>
        </div>
      </div>

      {/* 메인이미지 */}
      <div>
        <image className="mainImage" src="" alt="메인이미지" />
        <div className="mainImageTitle">
          <span className="smallTitleText">여름시즌 신메뉴 출시!</span>
          <image className="bigTitleText" src="" alt="제목" />
          <div> 신 메뉴 보러가기 </div>
        </div>
      </div>

      {/* 줄바꿈하는방법? */}
      <div className="EmeraldLatteImage" src="" alt="에메랄드라떼" />
      <div className="EmeraldLat`te">
        <span className="name"> 에메랄드 라떼</span>
        <span className="englishName">Emerald Latte</span>
        <span className="explanation">
          코코넛과 레몬, 그리고 초코를 넣은 상큼 달달한 라떼
        </span>
      </div>
      <div className="chocoBeachLatteImage" src="" alt="초코비치라떼" />
      <div className="chocoBeachLatte">
        <span className="name">초코 비치 라떼</span>
        <span className="englishName">Choco Beach Latte</span>
        <span className="explanation">
          초코시럽과 블루티를 넣어 섞은 에티오피아 원두로 만든 라떼
        </span>
      </div>
      <image className="mainBackground" src="" />
      {/*
        <div className="blackBox">
          <div className="noticeText">공지사항</div>
          <div className="noticeTitle">ㅇㅇㅇ일부 메뉴 가격 인상 안내</div>
          <div className="clickNotice" onclick="" />
          <div className="noticeText">이벤트</div>
          <div className="noticeTitle">벚꽃시리즈 스템프 이벤트</div>
          <div className="clickNotice" onclick="" />
        </div>
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
