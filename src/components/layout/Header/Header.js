import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
  render(){
    return (
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className='link' >Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/about`} activeClassName='active' className='link'>About</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/services`} activeClassName='active' className='link'>Services</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Projects`} activeClassName='active' className='link'>Projects</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/contact`} activeClassName='active' className='link'>Contact</NavLink>
    </nav>
    );
  }
}

export default Header;
