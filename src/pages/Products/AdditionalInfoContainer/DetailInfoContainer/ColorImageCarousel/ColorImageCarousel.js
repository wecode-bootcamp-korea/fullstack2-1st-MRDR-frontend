import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faCircle as solidCircle,
} from '@fortawesome/free-solid-svg-icons';
import ColorImageBox from './ColorImageBox';
import './ColorImageCarousel.scss';
import { SCREEN_MOVEMENT } from '../../../../../util/constants';
class ColorImageCarousel extends React.Component {
  render() {
    const {
      currentSlideIndex,
      clickedColor,
      handleSlidePrevBtn,
      handleSlideNextBtn,
    } = this.props;
    return (
      <div className="ColorImageCarousel">
        <button className="carouselBtn prevBtn" onClick={handleSlidePrevBtn}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          className="colorImagesTrack"
          style={{
            transform: `translateX(-${
              SCREEN_MOVEMENT.COLOR_IMAGE * currentSlideIndex
            }px)`,
          }}
        >
          {clickedColor.imageUrlList.map((imageUrl, index) => {
            return <ColorImageBox key={index} imageUrl={imageUrl} />;
          })}
        </div>
        <button className="carouselBtn nextBtn" onClick={handleSlideNextBtn}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="carouselNav">
          <ul className="navList">
            {clickedColor.imageUrlList
              .filter((imageUrl, index) => index % 2 === 1)
              .map((imageUrl, index) => {
                return (
                  <li key={index}>
                    <span className="navCircle">
                      <FontAwesomeIcon
                        icon={
                          currentSlideIndex === index
                            ? solidCircle
                            : regularCircle
                        }
                      />
                    </span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ColorImageCarousel;
