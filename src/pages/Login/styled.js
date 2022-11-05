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
        min-width: 200px;

        border:solid 2px var(--cor-primaria);
        border-radius: 5px;
        background-color: white;

        font-size: 0.875rem;
        font-weight: bold;
        color: var(--cor-secundaria);
        opacity: 0.9;
        padding: 8px 16px;
        cursor: pointer;
        box-shadow: 0px 0px 8px  var(--cor-complementar-1);

        :active, :focus{
            border: none;
        }

        ::placeholder{
            opacity: 0.3;
            color: black;
        }
    }

    button{
        border: none;
        border-radius: 4px;
        font-size: 1.25rem;

        margin-top: 2rem;
        padding: 8px 12px; 

        color: var(--cor-secundaria);
        background-color: var(--cor-complementar-1);

        transition: 0.5s ease-in-out;
        cursor: pointer;
    
        :hover{
            background-color: var(--cor-primaria);
            filter:drop-shadow(0px 0px 8px var(--cor-primaria));
        }
    }
    
    img{
        margin-left: 8px;
        width: 200px;
        margin-bottom: 3rem;
        filter:drop-shadow(0px 0px 12px var(--cor-primaria));

    }
    
    
`;



