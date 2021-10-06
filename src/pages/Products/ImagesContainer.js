import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as solidCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import SubImage from './SubImage';
import './ImagesContainer.scss';

class ImagesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      productImageSlides: [],
      mainImageUrl: '',
      currentSlideId: 1,
      isMouseDown: false,
      startX: 0,
      initialScrollLeft: 0,
      scrollLeft: 0,
    };
    this.slideRef = React.createRef();
  }

  componentDidMount() {
    fetch('http://localhost:3000/productImagesData.json')
      .then(res => res.json())
      .then(data => {
        const mainImageUrl = data[0][0].imageUrl;
        this.setState({ productImageSlides: data, mainImageUrl });
      })
      .catch(err => console.error(err));
  }

  handleImageHoverEvent = (id, imageUrl) => {
    this.setState({ hoveredImgId: id, mainImageUrl: imageUrl });
  };

  handleBtnPrevSlide = () => {
    let { currentSlideId } = this.state;
    currentSlideId--;
    if (currentSlideId < 1) {
      currentSlideId = 1;
    }
    this.setState({ currentSlideId });
  };

  handleBtnNextSlide = () => {
    let { productImageSlides, currentSlideId } = this.state;
    currentSlideId++;
    const lastId = productImageSlides.length;
    if (currentSlideId > lastId) {
      currentSlideId = lastId;
    }
    this.setState({ currentSlideId });
  };

  handleMouseDown = e => {
    const { slideRef } = this;
    const { isMouseDown } = this.state;
    const startX = e.pageX - slideRef.current.offsetLeft;
    const scrollLeft = slideRef.current.scrollLeft;
    this.setState({
      isMouseDown: !isMouseDown,
      startX,
      initialScrollLeft: scrollLeft,
      scrollLeft,
    });
  };

  handleMouseMove = e => {
    const { slideRef } = this;
    const { isMouseDown, startX, scrollLeft } = this.state;
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    slideRef.current.scrollLeft = scrollLeft - walk;
  };

  handleMouseUp = e => {
    const { isMouseDown } = this.state;
    this.setState({ isMouseDown: !isMouseDown });
  };

  handleMouseLeave = e => {
    const { isMouseDown } = this.state;
    this.setState({ isMouseDown: !isMouseDown });
  };

  render() {
    const { productImageSlides, mainImageUrl, currentSlideId, isMouseDown } =
      this.state;
    const {
      slideRef,
      handleImageHoverEvent,
      handleBtnPrevSlide,
      handleBtnNextSlide,
      handleMouseDown,
      handleMouseMove,
      handleMouseUp,
      handleMouseLeave,
    } = this;
    const slideCss = {
      transform: `translateX(-${660 * (currentSlideId - 1)}px)`,
      transition: 'all 0.5s ease-in-out',
    };
    return (
      <div className="ImagesContainer">
        <div className="mainImageWrapper">
          <img className="mainImage" src={mainImageUrl} alt="" />
        </div>
        <div
          className={
            isMouseDown ? 'subImagesContainer active' : 'subImagesContainer'
          }
          ref={slideRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {productImageSlides.map((imageSlide, index) => {
            const slideId = index + 1;
            return (
              <div
                key={slideId}
                id={slideId}
                style={slideCss}
                className="imageSlide"
              >
                {imageSlide.map(productImage => {
                  const { id, imageUrl } = productImage;
                  return (
                    <SubImage
                      key={id}
                      id={id}
                      imageUrl={imageUrl}
                      handleImageHoverEvent={handleImageHoverEvent}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="slideNavBar">
          <button
            className={currentSlideId > 1 ? 'prevBtn' : 'prevBtn hidden'}
            onClick={handleBtnPrevSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <ul className="slideNav">
            {productImageSlides.map((imageSlide, index) => {
              const slideId = index + 1;
              if (currentSlideId === slideId) {
                return (
                  <li key={slideId} className="slideIconWrapper">
                    <button className="slideIcon">
                      <FontAwesomeIcon icon={solidCircle} />
                    </button>
                  </li>
                );
              }
              return (
                <li key={slideId} className="slideIconWrapper">
                  <button className="slideIcon">
                    <FontAwesomeIcon icon={regularCircle} />
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            className={
              productImageSlides.length > currentSlideId
                ? 'nextBtn'
                : 'nextBtn hidden'
            }
            onClick={handleBtnNextSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default ImagesContainer;
