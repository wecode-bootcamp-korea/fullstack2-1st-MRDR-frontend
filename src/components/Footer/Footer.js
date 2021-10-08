import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="footerwrap">
          <div className="footerLeft">
            <img src="/image/logo.png" alt="logo" id="footerLogo" />
            <h5>고객센터</h5>
            <p className="number">1566-4044</p>
            <p className="time">평일 AM 09:00 ~ PM 05:30 / 주말, 공휴일 휴무</p>
            <p className="time">점심 PM 12:00 ~ PM 09:00</p>
          </div>
          <div className="footerRight">
            <div className="sub">
              <a href="#!">이용약관&nbsp;&nbsp;|&nbsp;&nbsp;</a>
              <a href="#!" className="subBold">
                개인정보처리방침&nbsp;&nbsp;|&nbsp;&nbsp;
              </a>
              <a href="#!">쇼핑몰 이용안내&nbsp;&nbsp;|&nbsp;&nbsp;</a>
              <a href="#!">강사회원 신청</a>
            </div>
            <div className="adress">
              <p>
                주식회사 모른다르&nbsp;&nbsp;|&nbsp;&nbsp;대표이사 : 김원영
                &nbsp;&nbsp;|&nbsp;&nbsp;사업자등록번호 : 123-45-67890
              </p>
              <p>
                통신판매신고 :
                제2021-서울마포-1234호&nbsp;&nbsp;|&nbsp;&nbsp;WEBMASTER :
                김원영
              </p>
              <p>
                주소 : 03995 서울특별시 마포구 서교동 양화로 147 4층 홍대위워크
              </p>
              <p>
                TEL : 1566-0400&nbsp;&nbsp;|&nbsp;&nbsp;E-mail :
                abcd@mrdr.co.kr&nbsp;&nbsp;|&nbsp;&nbsp;호스팅제공자 :
                카페24(주)
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
