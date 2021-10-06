import React from 'react';
import ImageSlideItem from '../ImageSlideItem/ImageSlideItem';
import './ImageSlider.scss';

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { curIndex: 10 };
  }

  onClick = () => {
    const {
      state: { curIndex },
    } = this;
    this.setState(() => ({ curIndex: curIndex + 25 }));
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
