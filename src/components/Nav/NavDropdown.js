import React from 'react';
import './NavDropdown.scss';

export default class NavDropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <a href="./productlist" className="dropmenu">
          전체
        </a>
        <a href="./productlist" className="dropmenu">
          하의
        </a>
        <a href="./productlist" className="dropmenu">
          상의
        </a>
        <a href="./productlist" className="dropmenu">
          아우터
        </a>
        <a href="./productlist" className="dropmenu">
          맨즈
        </a>
        <a href="./productlist" className="dropmenu">
          용품
        </a>
      </div>
    );
  }
}
