import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 600px;
    margin: auto;
    padding: 1rem;
    min-height: 60vh;


`

export const AccountCard = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: var(--cor-complementar-2);
    color: var(--cor-secundaria);

    h1{
        margin-bottom: 1rem;
        width: 100%;
        text-align: center;
    }

    p{
        font-size: 0.875rem;
        max-width: 400px;
        min-width: 400px;
        margin: auto;
        padding: 1rem 0rem;
        border-bottom: 1px solid #515a66;

        @media screen and (max-width: 500px){
            min-width: 100%;
        }

        strong{
            font-size: 1rem;
            margin-right: 6px;
        }
    }

    span{
        display: flex;
        width: min-content;
        height: min-content;
        margin: auto;
        color: var(--cor-primaria);
        filter: drop-shadow(0px 0px 6px var(--cor-primaria));
        border-radius: 100%;
        padding: 1.5rem;
    }

    button{
        border: none;
        border-radius: 4px;
        font-size: 1.25rem;

        width: fit-content;

        margin: 2rem auto;
        padding: 8px 12px; 

        color: var(--cor-secundaria);
        background-color: var(--cor-complementar-1);

        transition: 0.5s ease-in-out;
        cursor: pointer;
    
        :hover, :focus{
            background-color: var(--cor-primaria);
            filter:drop-shadow(0px 0px 8px var(--cor-primaria));
        }
    }
`
export const AccountForm = styled.form`
        max-width: 400px;
        min-width: 400px;
        display: ${(props) => props.openForm === true ? "flex" : "none"};
        flex-direction: column;
        gap: 0.2rem;
        margin: auto;
        padding: 1rem 0rem;

        @media screen and (max-width: 500px){
            min-width: 100%;
        }
    h3{
        font-size: 0.750rem;
        padding: 0rem 0.75rem;
        border-radius: 1;
        width: fit-content;
        position: relative;
        background-color: var(--cor-complementar-2);
        top: 12px;
        left: 10px;
    }
    input{
        width: 100%;
        color: var(--cor-secundaria);
        padding: 0.75rem;
        border: 2px solid var(--cor-primaria);
        background-color: var(--cor-complementar-2);
        border-radius: 6px;

        :last-child{
            width: fit-content;
            margin: 1.25rem auto;
            font-size: 1rem;
            padding: 0.5rem 1rem;
            transition: 0.5s ease-in-out;

            :hover, :focus{
                background-color: var(--cor-primaria);
                filter:drop-shadow(0px 0px 8px var(--cor-primaria));
            }
        }
    }
`

export const SignOut = styled.button`
    transition: 0.5s ease-in-out;
    padding: 1.5rem 1rem;
    margin: auto;
    width: fit-content;

    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;

    background-color: var(--cor-secundaria);
    color: var(--cor-vermelho);
    :hover, :focus{
        color: red;
    }
`