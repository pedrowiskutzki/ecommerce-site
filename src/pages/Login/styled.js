import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--background-footer);
    display: flex;
    padding: 4rem 2rem;
    width: 90%;
    max-width: 500px;
    margin: 5rem auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    border-radius: 8px;
    box-shadow: 0px 0px 20px  var(--cor-complementar-1);
    
    h1{
        color:var(--cor-primaria);
        margin-bottom: 6px;

    }
    input{
        margin-top: 1rem;
        border:solid 2px var(--cor-primaria);
        border-radius: 5px;
        padding: 4px 8px;
        min-width: 200px;
        cursor: pointer;
        box-shadow: 0px 0px 8px  var(--cor-complementar-1);
    }

    button{
        color: var(--cor-secundaria);
        margin-top: 2rem;
        border-radius: 6px;
        padding: 4px 12px; 
        background-color: var(--cor-complementar-1);
        cursor: pointer;
        transition: 0.5s ease-in-out;
    
        :hover{
            background-color: var(--cor-primaria);
        }
    }
    
    img{
        margin-left: 8px;
        width: 200px;
        margin-bottom: 3rem;
        filter:drop-shadow(0px 0px 12px var(--cor-primaria));

    }
    
    
`;



