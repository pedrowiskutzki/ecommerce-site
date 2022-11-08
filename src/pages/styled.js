 import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    padding-top: 1rem ;
    min-height: 54vh;
    width: auto;
    margin: auto;
    margin-bottom: 2rem;
    gap: 2rem;
   
`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 250px;
    padding: 1rem;
    height: 430px;
    padding: 1.5rem;

    border-radius: 6px;
    background-color: var(--background-footer);
    filter: drop-shadow(2px 2px 8px black);
    
    @media screen and (max-width: 450px){
        width: 400px;
    }
    
    img{
        width: auto;
        height: auto;
        width: 100%;
        background-color: white;
        height: 200px;
        object-fit: cover;
        border-radius: 6px;
    }
`
export const NomeProduto = styled.h2`
    margin-top: 1rem;
    width: 200px;
    min-height: 40px;
    filter: drop-shadow(0px 0px 8px var(--cor-primaria));
    color: var(--cor-secundaria);
`

export const DescricaoProduto = styled.p`
    margin-top: -1rem;
    min-height: 30px;
    color: var(--cor-secundaria);
    font-size: 0.875rem;
`

export const ValorProduto = styled.p`
    position: relative;
    border-radius: 50px;
    background-color: var(--cor-secundaria);
    color: var(--cor-primaria);
    filter: drop-shadow(0px 0px 10px var(--cor-primaria));
    transition: 0.3s ease-in-out;

    font-weight: bold;
    text-align: center;
    
    min-width: fit-content;
    width: 100px;
    margin: auto;
    padding: 0.75rem;

    :hover, :focus{
        background-color: var(--cor-primaria);
        color: var(--cor-secundaria);
    }
`