import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
    <div className = 'navbar-top'>
      <Link to='/topics' className='navbar-topics'><span > Topics </span></Link>
      <Link to ='/' className='navbar-home'>Home</Link>
    </div>
    );
  }
}

export default NavBar;