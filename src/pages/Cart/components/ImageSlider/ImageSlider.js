import React from 'react';
import ImageSlideItem from '../ImageSlideItem/ImageSlideItem';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curIndex: 0 };
    this.virtualProps = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  onClick = () => {
    const {
      virtualProps,
      state: { curIndex },
    } = this;

    if (virtualProps.length - 1 === curIndex) {
      this.setState(() => ({ curIndex: -(curIndex += 1) * 288 }));
      return;
    }

    this.setState(() => ({ curIndex: -(curIndex += 1) * 288 }));
  };

  render() {
    const {
      onClick,
      state: { curIndex },
    } = this;

    return (
      <ul
        onClick={onClick}
        className="ImageSlider"
        style={{
          transform: `translateX(${curIndex}px)`,
        }}
      >
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
        <ImageSlideItem src={''} name={'티셔츠'} price={'4,050원'} />
      </ul>
    );
  }
}

export default ImageSlider;
