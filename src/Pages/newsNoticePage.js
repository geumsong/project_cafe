import React from "react";
import "../styles/pages/newsNoticePage.scss";
import dummy from "../datas/dummy.json";

const newsNoticePage = () => {
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
      <div className="noticeTitleSection">
        <div className="noticeMainText">
          <div className="noticeTextOrangeCircle">
            <div className="noticePageTitle">NOTICE</div>
            <div className="longOrangeCircle">
              <img
                src={require("../assets/img/longOrangeCircle.png")}
                alt="긴 타원형 주황색 원"
              />
            </div>
          </div>
          <div className="noticePageTitleKorean">공지사항</div>
        </div>
      </div>
      {/* 공지사항 타이틀 끝 */}

      {/* 공지사항 상단바 */}
      <div>
        <div>
          <div className="wholeNoticeBoard">
            <div className="noticeboardHeader">
              <div className="headerTextFirst">
                <span>No.</span>
              </div>
              <div className="headerTextSecond">
                <span>제목</span>
              </div>
              <div className="headerTextThird">
                <span>날짜</span>
              </div>
              <div className="headerTextFourth">
                <span>조회수</span>
              </div>
            </div>
            {/* 아래 부터는 목록부분 */}
            <div>
              {dummy?.map((data, index) => {
                return (
                  <div className="noticeboardBody">
                    <div className="bodyTextNumSection">
                      <div>{data.id}</div>
                    </div>

                    <div className="bodyTextTitleSection">
                      <div>{data.title}</div>
                    </div>
                    <div className="bodyTextDateSection">
                      <div>{data.date}</div>
                    </div>
                    <div className="bodyTextCntSection">
                      <div>{data.cnt}</div>
                    </div>
                  </div>
                );
              })}
              <div className="pageNum">1</div>
            </div>
          </div>
        </div>
      </div>
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

export default newsNoticePage;
