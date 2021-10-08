import React from 'react';
import './Nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingBag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends React.Component {
  state = { status: false };
  constructor() {
    super();
    this.state = {
      menuList: [],
      menuListSub: [],
      menuListHide: false,
    };
  }

  menuListHide = () => {
    this.setState({
      menuListHide: !this.state.menuListHide,
    });
  };

  componentDidMount() {
    fetch('/data/menuList.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          menuList: res.menuListData1,
          menuListSub: res.menuListData2,
        });
      });
  }

  render() {
    const { menuList, menuListSub } = this.state;
    return (
      <nav>
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
          <img src="/image/logo.png" alt="logo" className="logo" />
          <div className="menu">
            {menuList.map((element, index) => {
              return (
                <a href="#!" className="menuName" id={index}>
                  {element.title}
                </a>
              );
            })}
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
            <button onClick={this.menuListHide} className="barIcon">
              <FontAwesomeIcon icon={faBars} id="barIcon" />
            </button>
          </div>
        </div>
        <div className={this.state.menuListHide ? 'menuList' : 'menuListHide'}>
          <div className="menuBox">
            {menuList.map(menu => {
              return (
                <ul className="menuListLeft" key={menu.id}>
                  <li className="menuListTitle">{menu.title}</li>
                  <li className="menuListSub">{menu.total}</li>
                  <li className="menuListSub">{menu.list_1}</li>
                  <li className="menuListSub">{menu.list_2}</li>
                  <li className="menuListSub">{menu.list_3}</li>
                  <li className="menuListSub">{menu.list_4}</li>
                  <li className="menuListSub">{menu.list_5}</li>
                </ul>
              );
            })}
          </div>
          <div className="menuBoxRight">
            {menuListSub.map(menu => {
              return (
                <ul className="menuListRight" key={menu.id}>
                  <li className="menuListTitle">{menu.title}</li>
                  <li className="menuListSub">{menu.list_1}</li>
                  <li className="menuListSub">{menu.list_2}</li>
                  <li className="menuListSub">{menu.list_3}</li>
                </ul>
              );
            })}
            <div className="salePic">salepic</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
