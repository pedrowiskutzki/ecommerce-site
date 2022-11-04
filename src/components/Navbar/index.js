import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Hamburguer
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo192.png')} width="40px" heigth="40px" alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/service'>
            Services
          </NavLink>
          <NavLink to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up'>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
