import React from 'react';
import Section from '../Section/Section';
import image from '../../assets/image1.jpg';

class Academy extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this._timer = 50;
    this._text = 'How do you do? Mr. Stan. Hope you are good. How is Mindy? ';
    this._index = 0;
    this._forward = true;
    this.state = {
      text: ''
    };
  }

  _setText = () => {
    const text = this._text.substring(0, this._index);
    if (this._index > this._text.length + 15) {
      this._forward = false;
      this._timer = 15;
    }

    if (this._index <= 0) {
      this._forward = true;
      this._timer = 50;
    }

    this._forward ? this._index++ : this._index--;

    if (this._isMounted) {
      this.setState({ text });
    }

    setTimeout(this._setText, this._timer);
  };

  componentDidMount() {
    this._isMounted = true;
    this._setText();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { text } = this.state;
    const displayText = '> ' + text + ' |';
    return (
      <Section id="academy" heading="OUR ACADEMY">
        <div className="w3-display-container w3-container">
          <div className="w3-display-left w3-text-white w3-content w3-margin-left-32 w3-margin-right-32">
            <span className="w3-xxxlarge w3-hide-small w3-hide-medium">
              {displayText}
            </span>
            <span className="w3-xlarge w3-hide-small w3-hide-large">
              {displayText}
            </span>
            <span className="w3-medium w3-hide-medium w3-hide-large">
              {displayText}
            </span>
          </div>
          <img src={image} alt="" />
        </div>
        <p className="w3-container w3-content w3-line-2 w3-justify w3-opacity-min">
          {` Lorem Ipsum. The write up which Uncle Stan is gonna do. Yea, he's gonna do it; and he' gonna do it right. Lorem Ipsum. The write up dkd kdkd kkd which Uncle Stan is gonna do. Yea, he's gonna do it; and he's gonna do it right. Lorem Ipsum. The write up which Uncle Stan is gonna do. Yea, he's gonna do it; and he's gonna do it right.`}
        </p>
        <div>
          <a className="w3-text-light-blue w3-button w3-right" href="">
            learn more...
          </a>
        </div>
      </Section>
    );
  }
}

export default Academy;
