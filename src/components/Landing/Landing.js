import React, { Component } from 'react';
import './Landing.css';

import Nav from '../Nav/Nav';
import Header from '../Header/Header';

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing">
          <Nav />
          <Header />
        </div>
        <div className="landing_after"></div>
      </>
    );
  }
}

export default Landing;
