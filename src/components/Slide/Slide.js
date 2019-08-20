import React, { Component } from 'react';
import SlideImage from './SlideImage/SlideImage';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

class Slide extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this._timer = 5000;
    this.state = {
      index: 0
    };
  }
  _setIndex = () => {
    // let { index } = this.state;
    // index += 1;
    // if (index > 3) index = 0;
    // if (this._isMounted) {
    //   document
    //     .getElementById('slide')
    //     .classList.toggle('w3-animate-right', false);
    //   document
    //     .getElementById('slide')
    //     .classList.toggle('w3-animate-right', true);
    //   this.setState({ index });
    // }
    // setTimeout(this._setIndex, this._timer);
  };
  _getImage(index) {
    switch (index) {
      case 0:
        return image1;
      case 1:
        return image2;
      case 2:
        return image3;
      case 3:
        return image4;
      default:
        return image1;
    }
  }
  componentDidMount() {
    this._isMounted = true;
    setTimeout(this._setIndex, this._timer);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    // const { index } = this.state;
    // console.log('index', index);
    return (
      <div id="slide" className="slide">
        <SlideImage />
      </div>
    );
  }
}

export default Slide;
