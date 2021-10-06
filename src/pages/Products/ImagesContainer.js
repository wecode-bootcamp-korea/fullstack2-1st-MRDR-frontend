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
    fetch('http://localhost:3000/productImagesData.json')
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
    const lastId = productImageSlides.length;
    if (nextSlideIndex > lastId) {
      nextSlideIndex = lastId;
    }
    this.setState({ currentSlideIndex: nextSlideIndex });
  };

  handleMouseDown = e => {
    const { slideRef } = this;
    const { isMouseDown } = this.state;
    const slideStartX = e.pageX - slideRef.current.offsetLeft;
    const slideScrollLeft = slideRef.current.slideScrollLeft;
    this.setState({
      isMouseDown: !isMouseDown,
      slideStartX,
      slideInitScrollLeft: slideScrollLeft,
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
    slideRef.current.slideScrollLeft = slideScrollLeft - walk;
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
    const { productImageSlides, mainImageUrl, currentSlideIndex, isMouseDown } =
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
      transform: `translateX(-${660 * currentSlideIndex}px)`,
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

// merge conflict 해결

export default ImagesContainer;
