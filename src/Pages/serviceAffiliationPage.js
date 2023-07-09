import React from "react";
import "../styles/pages/serviceAffiliationPage.scss";

const serviceAffiliationPage = () => {
  return (
    <div>
      {/* 타이틀 섹션 시작 */}
      <div className="affTitleSection">
        <div>
          <img
            className="affLogo"
            src={require("../assets/img/cuplogo.png")}
            alt="로고"
          />
        </div>
        <div className="affTitle">ㅇㅇㅇ 가맹문의</div>
        <span className="affExplain">
          ㅇㅇㅇ은 국내 고품격 커피브랜드로서 건물의 가치 및 인지도 상승을
          확신합니다. {"\n"}저희 ㅇㅇㅇ와 함께 하시는데 관심이 있으신 분은
          하단의 내용을 작성(신청)해 주시면 친절하고 상세하게 상담해
          드리겠습니다.{"\n"} 단, 문의 사항이 불분명한 경우 등은 상담이
          불가능함을 알려드립니다.
        </span>

        <button className="applyAffiliateButton">
          <span className="applyAffiliateButtonText">가맹 신청하기</span>
        </button>
      </div>
      {/* 타이틀 섹션 끝  */}
      {/* 가맹절차 섹션 시작 */}
      <div className="affProcessSection">
        <div className="affProcessWholeBox">
          <div className="affProcess">
            <div>
              <img
                className="questionButton"
                src={require("../assets/img/questionButton.png")}
                alt="물음표버튼"
              />
            </div>
            <div className="affProcessMainText">가맹 절차</div>
          </div>
          <div className="affLine"></div>
          {/* 가맹절차 타이틀 끝 */}

          {/* 가맹절차 상세한 설명 시작 */}
          {/* STEP 1 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 1</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">가맹점 창업 문의</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  본사 홈페이지 또는 전화 (080-723-2323)신청 및 접수
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 2 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 2</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">접수 및 담당자 개별 상담</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  회사소개, 투썸플레이스 프랜차이즈 사업 설명
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 3 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 3</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">
                  후보지 선정, 상권분석, 본사 개설 승인
                </span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 사업타당성 분석 가맹신청서 접수 {"\n"} - 정보공개서 제공
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 4 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 4</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">가맹계약 체결</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 계약 기간 3년 계약 만료 후 1년 단위 재계약 {"\n"}- 추가 비용
                  없음
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 5 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 5</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">가맹금/보증금/교육비 입금</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  가맹금 : 2,000만원 ㅣ 보증금 : 1,000만원 ㅣ 교육비 : 150만원
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 6 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 6</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">
                  시공 : 점포실측, 디자인 결정 후 공사 진행
                </span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 실측 후 설계도면 작성, 점주님과 최종 협의 {"\n"} - 시공업체
                  선정(입찰), 공사 계약 {"\n"}- 공사 기간 약 25일 ~ 35일 예상
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 7 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 7</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">직원채용 및 교육</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 본사와 점주님 협의 후 직원 면접 채용 {"\n"}- 점주님 및 직원
                  교육 (10일 : 이론, 실습 교육)
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 8 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 8</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">인/허가 및 영업 준비</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 각종 인/허가 증명서 발급 {"\n"}- 카드 승인 및 영업 관련 모든
                  사항 점검 {"\n"}- OPEN 준비(리허설)
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>

          {/* STEP 9 */}
          <div className="stepWholeBox">
            <div className="stepWholeBoxTextAlign">
              <div className="stepBox">
                <div className="stepNumBox">
                  <div className="stepNumBoxText">STEP 9</div>
                </div>
              </div>
              <div className="stepTitleBox">
                <span className="stepTitleText">점포오픈</span>
              </div>
              <div className="stepSubBox">
                <span className="stepSubBoxText">
                  - 오픈 프로모션 진행 {"\n"}- 투썸플레이스 영업 시작
                </span>
              </div>
            </div>
          </div>
          <div className="affLine"></div>
        </div>
      </div>
    </div>
  );
};

export default serviceAffiliationPage;
