import React from "react";
import "../styles/pages/footer.css";

const footer = () => {
  return (
    <div>
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
                src={require("../assets/img/narrowDec.png")}
                alt="돼지꼬리화살표"
              />
              <div className="followSns">
                <div className="followUs">FOLLOW US!</div>
                <div className="snsLink">
                  <div>
                    <img
                      className="snsImage"
                      src={require("../assets/img/youtube.png")}
                      alt="유튜브"
                    />
                  </div>
                  <div>
                    <img
                      className="snsImage"
                      src={require("../assets/img/instagram.png")}
                      alt="인스타"
                    />
                  </div>
                  <div>
                    <img
                      className="snsImage"
                      src={require("../assets/img/facebook.png")}
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

export default footer;
