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
import AuthContext from "../../context/auth";
import { useContext } from "react";
import { User } from "phosphor-react";

const Navbar = () => {

  // está retornando "undefined", não possibilitando alterar os botões de login e sair
  const { isAuthenticated } = useContext(AuthContext);

  const [hamburguer, setHamburguer] = useState(false);
  
  const toggleHamburguer = () => {
    setHamburguer(!hamburguer);
  }
  const closeeHamburguer = () => {
    setHamburguer(false);
    console.log(isAuthenticated)
  }
  
//   if (!isAuthenticated) {
//     return (
//       <>
//       <Nav>
//         <NavLink onClick={() => closeeHamburguer()} hamburguer={hamburguer} to='/'>
//           <img src={require('../../images/logo-white.png')} width="75x" heigth="75px" alt='logo' />
//         </NavLink>
//         <Bars onClick={() => toggleHamburguer()} hamburguer={hamburguer}/>
//         <NavMenu hamburguer={hamburguer}>
//           <NavLink onClick={() => closeeHamburguer()} to='/computing'>Informática</NavLink>
//           <NavLink onClick={() => closeeHamburguer()} to='/office'>Escritório</NavLink>
//           <NavLink onClick={() => closeeHamburguer()} to='/bookstore'>Livraria</NavLink>
//           <NavLink onClick={() => closeeHamburguer()} to='/cart'>Carrinho</NavLink>
//         </NavMenu>
//         <NavBtn  hamburguer={hamburguer}>
//           <NavBtnLink isAuthenticated={isAuthenticated} onClick={() => closeeHamburguer()} to='/login'>Login</NavBtnLink>
//           {/* <NavBtnLink isAuthenticated={isAuthenticated} onClick={() => closeeHamburguer()} to='/'>Sair</NavBtnLink> */}
//         </NavBtn>
//       </Nav>
//     </>
//     );
// }

  return (
    <>
      <Nav>
        <NavLink onClick={() => closeeHamburguer()} hamburguer={hamburguer} to='/'>
          <img src={require('../../images/logo-white.png')} width="75x" heigth="75px" alt='Logo - Representada por um homem andando com um carrinho de compras em cima do nome da empresa "O Wall-Line"'/>
        </NavLink>
        <Bars onClick={() => toggleHamburguer()} hamburguer={hamburguer}/>
        <NavMenu hamburguer={hamburguer}>
          <NavLink id='firstLink' onClick={() => closeeHamburguer()} to='/computing'>Informática</NavLink>
          <NavLink onClick={() => closeeHamburguer()} to='/office'>Escritório</NavLink>
          <NavLink onClick={() => closeeHamburguer()} to='/bookstore'>Livraria</NavLink>
          <NavLink onClick={() => closeeHamburguer()} to='/cart'>Carrinho</NavLink>
        </NavMenu>
        <NavBtn  hamburguer={hamburguer}>
          <NavBtnLink isAuthenticated={isAuthenticated} onClick={() => closeeHamburguer()} to='/login'>Login</NavBtnLink>
          <NavBtnLink isAuthenticated={isAuthenticated} onClick={() => closeeHamburguer()} to='/user'><User size={32} /></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
