import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingBag,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import NavDropdown from './NavDropdown';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: [],
      menuListSub: [],
      menuListHide: false,
      searchInput: '',
      isHovering: false,
      isUserLoggedIn: false,
    };
    this.showMenu = this.showMenu.bind(this);
  }

  menuListHide = () => {
    this.setState({
      menuListHide: !this.state.menuListHide,
    });
  };

  getSearchInputValues = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleEnterKey = e => {
    const { searchInput } = this.state;
    if (e.key === 'Enter') {
      window.location.href = `http://localhost:3000/productlist?productName=${searchInput}`;
    }
  };

  isUserLoggedIn = () => {
    this.setState({
      isUserLoggedIn: localStorage.getItem('token') ? true : false,
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isUserLoggedIn !== prevState.isUserLoggedIn) {
      this.isUserLoggedIn();
    }
  }

  showMenu = () => {
    this.setState(this.toggleMenu);
  };

  toggleMenu = state => {
    return {
      isHovering: !state.isHovering,
    };
  };

  signOut = () => {
    localStorage.removeItem('token');
    this.isUserLoggedIn();
    window.location.reload();
  };

  render() {
    const { isLogined } = this.props;
    const { menuList, menuListSub, searchInput, isUserLoggedIn } = this.state;
    return (
      <nav>
        <div className="navTop">
          {isLogined ? (
            <Link
              to="/"
              className="topLogin"
              onClick={() => {
                this.signOut();
              }}
            >
              로그아웃
            </Link>
          ) : (
            <Link to="./login" className="topLogin">
              로그인
            </Link>
          )}
          {isLogined ? (
            <Link to="./signup" className="topSignup">
              마이페이지
            </Link>
          ) : (
            <Link to="./signup" className="topSignup">
              회원가입
            </Link>
          )}
          <Link to="#!" className="topService">
            고객센터
          </Link>
        </div>
        <div className="navMenu">
          <Link to="/">
            <img src="/image/logo.png" alt="logo" className="logo" />
          </Link>
          <div className="menu">
            {menuList.map((element, index) => {
              return (
                <Link
                  to={{
                    pathname: '/productlist',
                    search: '?typeNum=1',
                  }}
                  className="menuName"
                  key={index}
                  onMouseEnter={this.showMenu}
                >
                  {element.title}
                </Link>
              );
            })}
          </div>
          <div className="menuSide">
            <div className="searchBox">
              <input
                type="text"
                className="serchEnter"
                placeholder="원하는 상품을 검색하세요!"
                onChange={this.getSearchInputValues}
                onKeyPress={this.handleEnterKey}
              />
              <Link
                to={{
                  pathname: '/productlist',
                  search: `?productName=${searchInput}`,
                }}
                className="searchBtn"
                onClick={this.handleClick}
              >
                <FontAwesomeIcon icon={faSearch} id="searchIcon" />
              </Link>
            </div>
            <Link to="/cart">
              <FontAwesomeIcon icon={faShoppingBag} id="bagIcon" />
            </Link>
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
        <div className="Dropdown" onMouseLeave={this.showMenu}>
          {this.state.isHovering && <NavDropdown />}
        </div>
      </nav>
    );
  }
}

export default Nav;
