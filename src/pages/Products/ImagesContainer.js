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
      currentSlideIndex: 0,
      isMouseDown: false,
      slideStartX: 0,
      slideInitScrollLeft: 0,
      slideScrollLeft: 0,
    };
    this.slideRef = React.createRef();
  }

  componentDidMount() {
    fetch('/productImagesData.json')
      .then(res => res.json())
      .then(data => {
        const mainImageUrl = data[0][0].imageUrl;
        this.setState({ productImageSlides: data, mainImageUrl });
      })
      .catch(err => console.error(err));
  }

  handleImageHoverEvent = imageUrl => {
    this.setState({ mainImageUrl: imageUrl });
  };

  handleBtnPrevSlide = () => {
    const { currentSlideIndex } = this.state;
    let prevSlideIndex = currentSlideIndex - 1;
    if (prevSlideIndex < 0) {
      prevSlideIndex = 0;
    }
    this.setState({ currentSlideIndex: prevSlideIndex });
  };

  handleBtnNextSlide = () => {
    const { productImageSlides, currentSlideIndex } = this.state;
    let nextSlideIndex = currentSlideIndex + 1;
    const lastIndex = productImageSlides.length - 1;
    if (nextSlideIndex > lastIndex) {
      nextSlideIndex = lastIndex;
    }
    this.setState({ currentSlideIndex: nextSlideIndex });
  };

  handleMouseDown = e => {
    const { slideRef } = this;
    const { currentSlideIndex, isMouseDown } = this.state;
    const slideStartX = e.pageX - slideRef.current.offsetLeft;
    const slideScrollLeft = slideRef.current.scrollLeft;
    console.log(
      'startX: ',
      slideStartX,
      'slideScrollLeft: ',
      slideScrollLeft,
      'currentSlideIndex: ',
      currentSlideIndex,
      'offsetLeft: ',
      slideRef.current.offsetLeft
    );
    this.setState({
      isMouseDown: !isMouseDown,
      slideStartX,
      // slideInitScrollLeft: slideScrollLeft,
      slideScrollLeft,
    });
  };

  handleMouseMove = e => {
    const { slideRef } = this;
    const { isMouseDown, slideStartX, slideScrollLeft } = this.state;
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slideRef.current.offsetLeft;
    const walk = (x - slideStartX) * 1.5;
    console.log('X: ', x, 'walk: ', walk);
    slideRef.current.scrollLeft = slideScrollLeft - walk;
  };

  handleMoveEnd = e => {
    const { slideRef } = this;
    const {
      productImageSlides,
      currentSlideIndex,
      isMouseDown,
      slideStartX,
      slideInitScrollLeft,
    } = this.state;
    if (!isMouseDown) return;
    let nextSlideIndex, prevSlideIndex;
    const x = e.pageX - slideRef.current.offsetLeft;
    const walk = (x - slideStartX) * 1.5;
    slideRef.current.scrollLeft = slideInitScrollLeft;

    if (walk < -450) {
      nextSlideIndex = currentSlideIndex + 1;
      const lastIndex = productImageSlides.length - 1;
      if (nextSlideIndex > lastIndex) {
        nextSlideIndex = lastIndex;
      }
      this.setState({
        isMouseDown: false,
        currentSlideIndex: nextSlideIndex,
      });
    } else if (walk > 450) {
      prevSlideIndex = currentSlideIndex - 1;
      if (prevSlideIndex < 0) {
        prevSlideIndex = 0;
      }
      this.setState({
        isMouseDown: false,
        currentSlideIndex: prevSlideIndex,
      });
    } else {
      this.setState({ isMouseDown: false });
    }
  };

  render() {
    const { productImageSlides, mainImageUrl, currentSlideIndex, isMouseDown } =
      this.state;
    const {
      slideRef,
      handleImageHoverEvent,
      handleBtnPrevSlide,
      handleBtnNextSlide,
      handleMouseDown,
      handleMouseMove,
      handleMoveEnd,
    } = this;
    const slideCss = {
      transform: `translateX(-${660 * currentSlideIndex}px)`,
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
          onMouseUp={handleMoveEnd}
          onMouseLeave={handleMoveEnd}
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
            className={currentSlideIndex > 0 ? 'prevBtn' : 'prevBtn hidden'}
            onClick={handleBtnPrevSlide}
          >
            <FontAwesomeIcon icon={faChevronCircleLeft} />
          </button>
          <ul className="slideNav">
            {productImageSlides.map((imageSlide, index) => {
              const slideId = index + 1;
              if (currentSlideIndex === slideId - 1) {
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
              productImageSlides.length - 1 > currentSlideIndex
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
