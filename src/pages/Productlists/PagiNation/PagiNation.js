import React from 'react';
import { Link } from 'react-router-dom';
import './PagiNation.scss';

class PagiNation extends React.Component {
  render() {
    const pageNumber = [1, 2, 3, 4, 5];
    return (
      <ul className="pagiNation">
        <li>
          <Link to="/productlist">
            <img
              src="https://andar.co.kr/_wisa/img/common/paging_prev.png"
              alt="화살표"
            />
          </Link>
        </li>
        {pageNumber.map(page => {
          return (
            <li key={page.toString()}>
              <Link to="/productlist">{page}</Link>
            </li>
          );
        })}
        <li>
          <Link to="/productlists">
            <img
              src="https://andar.co.kr/_wisa/img/common/paging_next.png"
              alt="화살표"
            />
          </Link>
        </li>
      </ul>
    );
  }
}

export default PagiNation;
