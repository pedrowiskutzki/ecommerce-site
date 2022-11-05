import styled from 'styled-components';
import { List } from "phosphor-react";
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  background: var(--background-footer);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: var(--cor-secundaria);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    color: var(--cor-primaria);
  }
  
  :hover{
    opacity: 0.8;
  }
  
  @media screen and (max-width: 768px) {


    img{
      transition: none;
      display: block;
      
      width:  ${(props) => props.hamburguer === true ? "150px" : "75px"};
      height: auto;

      position:  ${(props) => props.hamburguer === true ? "fixed" : "relative"};;
      top: ${(props) => props.hamburguer === true ? "1rem" : "none"};
      left: ${(props) => props.hamburguer === true ? "50%" : "none"};
      transform:  ${(props) => props.hamburguer === true ? "translate(-48%, 100%)" : "none"};
     
      
      filter: ${(props) => props.hamburguer === true ? "drop-shadow(0px 0px 12px var(--cor-primaria))" : "none"};
      font-size: 1.8rem;
      z-index: 12;
      
    }
  }
`;

export const Bars = styled(List)`
  display: none;
  color: var(--cor-secundaria);
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: ${(props) => props.hamburguer === true ? "fixed" : "relative"};
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 12;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    min-width: 100vw;
    margin: none;
    gap: 2rem;
    
    position: fixed;
    display:  ${(props) => props.hamburguer === true ? "flex" : "none"};
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;

    background-color: var(--background-footer); 
    font-size: 2rem;

    z-index: 11;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: ${(props) => props.hamburguer === true ? "flex" : "none"};;
    z-index: 14;
    position: fixed;
    bottom: 5rem;
    left: 50% ;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: var(--cor-complementar-1);
  padding: 0.750rem 1.5rem;
  color: var(--cor-secundaria);
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--cor-secundaria);
    color: var(--background-footer);
  }

`;
