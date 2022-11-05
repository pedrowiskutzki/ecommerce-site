import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;

    //Variáveis de cores
    --cor-primaria: #2e9ec8;
    --cor-secundaria: #fff;
    --cor-complementar-1: #2673a6 ;
    --background-footer: #1f1f1f;
  }
  body, input, textarea, button{
        font-family: 'Oswald', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
  body{
    background-color: white;
    color: black;
    -webkit-font-smoothing: antialiased;
    padding: 0;
    margin: 0;
  }
  
  input, button{
    cursor: pointer;
  }

`;