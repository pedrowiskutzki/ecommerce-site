import React from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

function Menu(){
  render(){
    const [hamburguer, setHamburguer] = useState(true);
    const toggleHamburguer = (hamburguer) => {
      hamburguer = !hamburguer;
      console.log(hamburguer)
    }
  }
  }

const Navbar = () => {
  const Menu = new Menu();
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo192.png')} width="40px" heigth="40px" alt='logo' />
        </NavLink>
        <Bars onClick={() => {Menu.}}/>
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
