import React, { Component, createRef } from 'react';
import ColorOption from './ColorOption/ColorOption';
import './ColorOptionSlider.scss';

const COLOR_OPTION_WIDTH = 88;
const COLOR_OPTION_MARGIN_LEFT = 10;
// let grabTimeout;

class ColorOptionSlider extends Component {
  constructor() {
    super();
    this.state = {
      startX: null,
      dragDistance: null,
      currentOffset: null,
      isMouseDown: false,
    };
    this.sliderRef = createRef();
  }

  //onMouseDown
  handleMouseDown = ({ pageX }) => {
    // console.log('BEFORE isMouseDown mousedown', this.state.isMouseDown);
    const slider = this.sliderRef.current;
    const startX = pageX - slider.offsetLeft; //diff between where you click (pageX) and left edge of slider (slider.offsetLeft)
    // grabTimeout = setTimeout(
    //   () =>
    //     this.setState({ startX, isMouseDown: true }, () =>
    //       console.log('isMouseDown mousedown', this.state.isMouseDown)
    //     ),
    //   50
    // );
    // console.log('handleMouseDown grabTimeout', grabTimeout);
    this.setState({ startX, isMouseDown: true }); //used to be startX: pageX
  };

  //onMouseMove
  startDrag = ({ pageX }) => {
    const { startX, isMouseDown } = this.state;
    if (!isMouseDown) return;
    const slider = this.sliderRef.current;

    // console.log('startDrag:');

    const movingX = pageX - slider.offsetLeft;
    const dragDistance = movingX - startX;
    this.setState({ dragDistance });
  };

  //onMouseUp
  stopDrag = () => {
    const { dragDistance, currentOffset, isMouseDown } = this.state;
    // console.log('BEFORE isMouseDown: stopDrag', isMouseDown);
    if (!isMouseDown) return;
    // console.log('isMouseDown: stopDrag', isMouseDown);
    // console.log('stopDrag grabTimeout AFTER:', grabTimeout);
    // if (grabTimeout) clearTimeout(grabTimeout);

    const { colors } = this.props;
    const slider = this.sliderRef.current;
    const end =
      colors.length * (COLOR_OPTION_WIDTH + COLOR_OPTION_MARGIN_LEFT) -
      COLOR_OPTION_MARGIN_LEFT -
      slider.offsetWidth;
    const totalOffset = currentOffset + dragDistance;

    //handling snap
    if (totalOffset > 0 || totalOffset < -end) {
      this.setState({
        dragDistance: 0,
        currentOffset: totalOffset > 0 ? 0 : -end,
        isMouseDown: false,
      });
    } else {
      this.setState({
        dragDistance: 0,
        currentOffset: totalOffset,
        isMouseDown: false,
      });
    }
  };

  render() {
    const { dragDistance, currentOffset, isMouseDown } = this.state;
    const { colors, selectedColor, selectedSize, selectColor, selectSize } =
      this.props;

    return (
      <div
        className={
          isMouseDown ? 'ColorOptionSlider active' : 'ColorOptionSlider'
        }
        ref={this.sliderRef}
      >
        <ul
          className="colorOptionList"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.startDrag}
          onMouseUp={this.stopDrag}
          onMouseLeave={this.stopDrag}
          style={{
            transform: `translateX(${currentOffset + dragDistance}px)`,
            width: `${
              colors.length * (COLOR_OPTION_WIDTH + COLOR_OPTION_MARGIN_LEFT) -
              COLOR_OPTION_MARGIN_LEFT
            }px`,
          }}
        >
          {colors.map(color => {
            const { id, img, name, sizes } = color;
            return (
              <ColorOption
                key={id}
                imgUrl={img}
                color={name}
                sizes={sizes}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                selectColor={selectColor}
                selectSize={selectSize}
                isMouseDown={isMouseDown}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorOptionSlider;
