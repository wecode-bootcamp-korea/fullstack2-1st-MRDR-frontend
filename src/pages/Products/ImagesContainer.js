import React from 'react';
import './ImagesContainer.scss';

class ImagesContainer extends React.Component {
  render() {
    const { selectedColor } = this.props;

    return (
      <div
        className="ImagesContainer"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {selectedColor ? selectedColor : 'None'}
      </div>
    );
  }
}

export default ImagesContainer;

// import React from 'react';
// import './ImagesContainer.scss';

// class ImagesContainer extends React.Component {
//   render() {
//     return <div className="ImagesContainer">ImagesContainer</div>;
//   }
// }

// export default ImagesContainer;
