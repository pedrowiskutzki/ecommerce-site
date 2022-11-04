import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    //Variáveis de cores
    --cor-primaria: #15cdfc;
    --cor-secundaria: #fff;
    --cor-complementar-1: #2673a6 ;
    --background-footer: #1f1f1f;
  }
  
  input, button{
    cursor: pointer;
  }

`;