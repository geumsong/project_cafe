import React from "react";
import "../styles/pages/serviceDirectionsPage.scss";

const serviceDirectionsPage = () => {
  return (
    <div>
      {/* 찾아오시는길 페이지는 home에서 두번째 섹션, Coffee Bean 밑에 자세히보기 누르기에 임시 설정 */}
      <div className="dirMainSection">
        <div className="dirMainText">찾아오시는 길</div>
        <div className="map"></div>
      </div>

      {/* 카페주소 시작 */}
      <div className="dir">
        <div className="dirAddressWholeBox">
          <div className="dirHeadOfficeTextAlign">
            <div className="dirHeadOffice">ㅇㅇㅇ카페 본사</div>
          </div>
        </div>
        <div className="dirLine"></div>

        {/* 주소 */}
        <div className="addressDirBox">
          <div className="addressTitleTextBox">
            <div className="addressTitleTextAlign">
              <div className="addressTitleText">주소</div>
            </div>
          </div>
          <div className="addressSubTextAlign">
            <span className="addressSubText">
              서울특별시 강남구 선릉로 559-2 3층 / 우편번호 : 21985
            </span>
          </div>
        </div>
        <div className="dirLightLine"></div>

        {/* 전화번호 */}
        <div className="addressDirBox">
          <div className="addressTitleTextBox">
            <div className="addressTitleTextAlign">
              <div className="addressTitleText">전화번호</div>
            </div>
          </div>
          <div className="addressSubTextAlign">
            <span className="addressSubText">010.5105.4167</span>
          </div>
        </div>
        <div className="dirLightLine"></div>

        {/* 팩스 */}
        <div className="addressDirBox">
          <div className="addressTitleTextBox">
            <div className="addressTitleTextAlign">
              <div className="addressTitleText">팩스</div>
            </div>
          </div>
          <div className="addressSubTextAlign">
            <span className="addressSubText">02-978-3605</span>
          </div>
        </div>
        <div className="dirLightLine"></div>

        {/* 교통 */}
        <div className="addressDirBox">
          <div className="addressTitleTextBox">
            <div className="addressTitleTextAlign">
              <div className="addressTitleText">교통</div>
            </div>
          </div>
          <div className="addressSubTextAlign">
            <span className="addressSubText">
              선릉역 1번출구에서 도보로 약 43m
            </span>
          </div>
        </div>
        <div className="dirLightLine"></div>
      </div>
    </div>
  );
};

export default serviceDirectionsPage;
