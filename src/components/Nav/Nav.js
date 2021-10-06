import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingBag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="navTop">
          <a href="./signup" className="topLogin">
            로그인
          </a>
          <a href="./login" className="topSignup">
            회원가입
          </a>
          <a href="#!" className="topService">
            고객센터
          </a>
        </div>
        <div className="navMenu">
          <img src="/image/logo.png" alt="logo" id="logo" />
          <div className="menu">
            <a href="#!" className="menuName">
              베스트
            </a>
            <a href="#!" className="menuName">
              신상
            </a>
            <a href="#!" className="menuName">
              아울렛
            </a>
            <a href="#!" className="menuName">
              세트
            </a>
            <a href="#!" className="menuName">
              하의
            </a>
            <a href="#!" className="menuName">
              상의
            </a>
            <a href="#!" className="menuName">
              맨즈
            </a>
            <a href="#!" className="menuName">
              용품
            </a>
            <a href="#!" className="menuName">
              서스테이너블
            </a>
          </div>
          <div className="menuSide">
            <div className="searchBox">
              <input
                type="text"
                className="serchEnter"
                placeholder="원하는 상품을 검색하세요!"
              />
              <FontAwesomeIcon icon={faSearch} id="searchIcon" />
            </div>
            <FontAwesomeIcon icon={faShoppingBag} id="bagIcon" />
            <FontAwesomeIcon icon={faBars} id="barIcon" />
          </div>
        </div>
        {/* <div className="sideMenu">
          <div className="wrapInner">
            <div className="sideMenuRight">
              <ul>
                <li>
                  <a href="#!" className="sideMenuTitle">
                    베스트
                  </a>
                </li>
                <li>
                  <a href="#!">전체</a>
                </li>
                <li>
                  <a href="#!">하의</a>
                </li>
                <li>
                  <a href="#!">상의</a>
                </li>
                <li>
                  <a href="#!">아우터</a>
                </li>
                <li>
                  <a href="#!">맨즈</a>
                </li>
                <li>
                  <a href="#!">용품</a>
                </li>
              </ul>
            </div>
            <div className="sideMenuLeft"></div>
          </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Nav;
