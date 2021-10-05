import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <ul className="productFooter">
        <li>
          <a href="#">
            <img src="https://andar.co.kr/_wisa/img/common/paging_prev.png" />
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">
            <img src="https://andar.co.kr/_wisa/img/common/paging_next.png" />
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
