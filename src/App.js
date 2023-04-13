function App() {
  return (
    <div>
      <div className="top">
        <span className="logo" src="" href="" />
        <span className="categories">
          <span className="about">ABOUT</span>
          <span className="menu">MENU</span>
          <span className="news">NEWS</span>
          <span className="service">SERVICE</span>
        </span>
      </div>

      <div className="mainImage" src="">
        <div className="newMenuButton" />
        <div button onclick={() => (src = "")}>
          신메뉴 보러가기
          <div className="roundBox" />
        </div>
        <div className="coffeeOneImage" src="" />
        <div className="coffeeOneText">
          <p>에메랄드 라떼</p>
          <p>Emerald Latte</p>
          <p>코코넛과 레몬, 그리고 초코를 넣은 \ 상큼 달달한 라떼</p>
        </div>
        <div className="coffeeTwoImage" src="" />
        <div className="coffeeOneText">
          <p>초코바다 라떼</p>
          <p>Choco Beach Latte</p>
          <p>초코시럽과 블루티를 넣어 \ 섞은 에티오피아 원두로 만든 라떼</p>
        </div>
        <div className="mainBackground" src="" />
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
      </div>
    </div>
  );
}

export default App;