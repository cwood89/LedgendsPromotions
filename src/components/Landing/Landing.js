import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <>
        <div className="landing">
          {this.props.children}
        </div>
        <div className="landing_after"></div>
      </>
    );
  }
}

export default Landing;
