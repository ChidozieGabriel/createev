import React, { Component } from 'react';
import './index.css';
import Header from '../Header/Header';
import Slide from '../Slide/Slide';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Academy from '../Academy/Academy';

class App extends Component {
  render() {
    return (
      <div>
        <div className="w3-top">
          <Header />
        </div>
        <br />
        <Slide />
        <br />
        <Services />
        <Academy />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
