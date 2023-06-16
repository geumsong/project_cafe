import React from "react";
import "../styles/pages/menu.scss";

const menu = () => {
  return (
    // "menu" 타이틀 영역
    <div>
      <div className="menu">
        <div className="menuText"> MENU </div>
        <div className="menuSideText">
          찾으시는 메뉴를 클릭해서 확인해보세요.
        </div>
      </div>
      <div className="iconBox">
        <div className="threeIconBoxes">
          <div className="emptyIconBox">
            <img
              className="coffeeIcon"
              src={require("../assets/img/coffeeIcon.png")}
              alt="커피아이콘"
            />
            <div className="iconName">COFFEE</div>
          </div>
          <div className="emptyIconBox">
            <img
              className="beverageIcon"
              src={require("../assets/img/beverageIcon.png")}
              alt="음료아이콘"
            />
            <div className="iconName">BEVERAGE</div>
          </div>
          <div className="emptyIconBox">
            <div className="iconSection">
              <img
                className="dessertIcon"
                src={require("../assets/img/dessertIcon.png")}
                alt="디저트아이콘"
              />
              <div className="iconName">DESSERT</div>
            </div>
          </div>
        </div>
      </div>
      {/* "menu" 타이틀영역 끝 */}

      {/* menu - COFFEE 시작 */}
      <div className="coffeeMenuTitleSection">
        <div className="coffeeMenuTitle">
          COFFEE
          <img
            className="longOrageCircle"
            src={require("../assets/img/longOrangeCircle.png")}
            alt="오렌지색 원"
          />
        </div>
      </div>
    </div>
  );
};

export default menu;
