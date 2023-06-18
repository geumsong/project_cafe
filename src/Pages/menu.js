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
          <div className="selectIconBox">
            <img
              src={require("../assets/img/coffeeIconBlack.png")}
              alt="커피아이콘"
            />
            <div className="selectIconName">COFFEE</div>
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
        <div className="coffeeMenuTitle">COFFEE</div>
        <div className="longOrangeCircle">
          <img
            src={require("../assets/img/longOrangeCircle.png")}
            alt="오렌지색 원"
          />
        </div>
      </div>
      {/* COFFEE 메뉴 이미지 8개 */}
      <div className="eightMenuBoxesSection">
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
      </div>
      {/* COFFEE메뉴 영역 끝 */}

      {/* BEVERAGE 메뉴 영역 시작 */}
      <div className="coffeeMenuTitleSection">
        <div className="coffeeMenuTitle">BEVERAGE</div>
        <div className="longOrangeCircle">
          <img
            src={require("../assets/img/longOrangeCircle.png")}
            alt="오렌지색 원"
          />
        </div>
      </div>
      {/* BEVERAGE 메뉴 이미지 8개 */}
      <div className="eightMenuBoxesSection">
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
      </div>
      {/* BEVERAGE 메뉴 영역 끝 */}
      {/* DESSERT 메뉴 영역 시작 */}
      <div className="coffeeMenuTitleSection">
        <div className="coffeeMenuTitle">DESSERT</div>
        <div className="longOrangeCircle">
          <img
            src={require("../assets/img/longOrangeCircle.png")}
            alt="오렌지색 원"
          />
        </div>
      </div>
      {/* DESSERT 메뉴 이미지 8개 */}
      <div className="eightMenuBoxesSection">
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
        <div className="fourCoffeeMenuBoxes">
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
          <div className="eachCoffeeMenues">
            <div className="coffeeMenu"></div>
            <div className="coffeeName">커피메뉴이름</div>
          </div>
        </div>
      </div>
      {/* BEVERAGE 메뉴 영역 끝 */}
    </div>
  );
};

export default menu;
