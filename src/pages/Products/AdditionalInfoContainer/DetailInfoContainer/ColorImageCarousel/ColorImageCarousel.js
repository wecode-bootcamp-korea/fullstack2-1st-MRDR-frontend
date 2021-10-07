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
        <button className="prevBtn" onClick={handleSlidePrevBtn}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div
          className="colorImagesTrack"
          style={{
            transform: `translateX(-${780 * currentSlideIndex}px)`,
          }}
        >
          {clickedColor.imageUrlList.map((imageUrl, index) => {
            const key = index + 1;
            return <ColorImageBox key={key} imageUrl={imageUrl} />;
          })}
        </div>
        <button className="nextBtn" onClick={handleSlideNextBtn}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <div className="carouselNav">
          <ul className="navList">
            {clickedColor.imageUrlList.map((imageUrl, index) => {
              const key = index + 1;
              const slideIndex = parseInt(index / 2);
              if (index % 2 === 1) {
                return (
                  <li key={key}>
                    <span className="navCircle">
                      <FontAwesomeIcon
                        icon={
                          currentSlideIndex === slideIndex
                            ? solidCircle
                            : regularCircle
                        }
                      />
                    </span>
                  </li>
                );
              } else {
                return false;
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ColorImageCarousel;
