import React from "react";
import "../styles/pages/newsEventPage.scss";

const newsEventPage = () => {
  return (
    <div>
      <div className="searchSection">
        <div className="search">
          <input
            type="text"
            className="searchText"
            placeholder="검색어를 입력해주세요."
          ></input>
          <img
            className="noticeSearchIcon"
            src={require("../assets/img/search.png")}
            alt="돋보기 아이콘"
          />
        </div>
      </div>

      {/* 이벤트 큰 타이틀 부분  */}
      <div className="noticeTitleSection">
        <div className="noticeMainText">
          <div className="noticeTextOrangeCircle">
            <div className="noticePageTitle">EVENT</div>
            <div className="longOrangeCircle">
              <img
                src={require("../assets/img/longOrangeCircle.png")}
                alt="긴 타원형 주황색 원"
              />
            </div>
          </div>
          <div className="noticePageTitleKorean">이벤트</div>
        </div>
      </div>
      {/* 이벤트 큰 타이틀 부분 끝 */}
      {/* 이벤트 목록 부분  */}
      <div className="wholeEventSection">
        <div className="fourEventBoxes">
          <div className="eachEventBox">
            <div className="eventImage"></div>
            <div className="eventTitle">벚꽃시리즈 스탬프 이벤트</div>
          </div>
          <div className="eachEventBox">
            <div className="eventImage"></div>
            <div className="eventTitle">만우절 이벤트! 한 잔 더~</div>
          </div>
          <div className="eachEventBox">
            <div className="eventImage"></div>
            <div className="eventTitle">WHAT'S NEW?</div>
          </div>
          <div className="eachEventBox">
            <div className="eventImage"></div>
            <div className="eventTitle">3월 스탬프 25개: 텀블러 증정</div>
          </div>
        </div>
      </div>
      <div className="pageNum">1</div>

      <div className="topButtonSection">
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

export default newsEventPage;
