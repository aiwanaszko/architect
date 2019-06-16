import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import { Row, Col } from 'react-flexbox-grid';

class Header extends React.Component {
  render(){
    return (
    <div className='header'>
    <Row>
      <Col lg={8}>
          <h1>Autorska pracownia architektoniczna</h1>
          <h2>arch Adam Iwanaszko</h2>
      </Col>
      <Col lg={4}>
        <nav>
          <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className='link' >Home</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/about`} activeClassName='active' className='link'>About</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/services`} activeClassName='active' className='link'>Services</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/Projects`} activeClassName='active' className='link'>Projects</NavLink>
          <NavLink to={`${process.env.PUBLIC_URL}/contact`} activeClassName='active' className='link'>Contact</NavLink>
        </nav>
      </Col>
    </Row>

    </div>
    );
  }
}

export default Header;
