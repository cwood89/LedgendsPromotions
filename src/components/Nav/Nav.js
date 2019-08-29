import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav>
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

export default Nav;
