import React from 'react';
import './carousel.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlide : 0
    }
  }
  render() {
    return (
      <div className="carousel">
        <div className="slideWrap">
          <ul 
            style{{
              transform : `translateX(-${1300 * this.state.currentSlide}px)`}}>
            <li className="cell">0</li>
            <li className="cell">1</li>
            <li className="cell">2</li>
            <li className="cell">3</li>
            <li className="cell">4</li>
          </ul>
        </div>
        <div className="slideBtn">
          <button className="prevBtn">
            <FontAwesomeIcon icon={faChevronLeft} className="previousIcon" />
          </button>
          <button className="nextBtn">
            <FontAwesomeIcon icon={faChevronRight} className="nextIcon" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
