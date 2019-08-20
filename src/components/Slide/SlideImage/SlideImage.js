import React from 'react';
import './SlideImage.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

class SlideImage extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this._timer = 5000;
    this._index = 0;
    // this.state = {
    //   index: 0
    // };
  }

  _setIndex = () => {
    console.log('here');
    this._index += 1;
    if (this._index > 3) this._index = 0;
    // if (this._isMounted) {
    this._setView(this._index);
    // }

    setTimeout(this._setIndex, this._timer);
  };

  _setView(index) {
    console.log('index', index);
    const mySlides = document.getElementsByClassName('mySlides');
    for (let i = 0; i < mySlides.length; i += 1) {
      mySlides[i].style.display = 'none';
    }

    mySlides[index].style.display = 'block';
  }

  componentDidMount() {
    this._isMounted = true;
    this._setIndex();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const alt = '';
    const className = 'w3-animate-left w3-greyscale-min mySlides';
    return (
      <div>
        <img src={image1} alt={alt} className={className} />
        <img src={image2} alt={alt} className={className} />
        <img src={image3} alt={alt} className={className} />
        <img src={image4} alt={alt} className={className} />
      </div>
    );
  }
}

export default SlideImage;
