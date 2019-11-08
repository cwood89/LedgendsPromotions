import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './NavAlt.css';

class NavAlt extends Component {
  render() {
    return (
      <nav className="nav">
        <h1>LEGENDS</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/karaoke">Karaoke</Link></li>
          <li><Link to="/photos">Photography</Link></li>
          <li><Link to="/booking">Booking</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavAlt;
