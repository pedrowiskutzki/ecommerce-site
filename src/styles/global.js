import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

    //Variáveis de cores
    --cor-primaria: #2e9ec8;
    --cor-secundaria: #fff;
    --cor-complementar-1: #2673a6 ;
    --cor-complementar-2: #292929;
    --background-footer: #1f1f1f;
  }
 
  
  input, button{
    cursor: pointer;
  }

`;