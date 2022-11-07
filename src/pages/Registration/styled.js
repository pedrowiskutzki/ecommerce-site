import styled from 'styled-components';

export const Container = styled.form`
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
        color: var(--cor-complementar-2);

        font-size: 0.875rem;
        font-weight: bold;
        opacity: 0.9;
        padding: 8px 16px;
        cursor: pointer;
        box-shadow: 0px 0px 8px  var(--cor-complementar-1);

        :active, :focus{
            border: none;
        }

        ::placeholder{
            opacity: 0.3;
            color: var(--cor-complementar-2);
        }
    }

    a{
        border: none;
        border-radius: 4px;
        
        margin: 2rem 0rem;
        padding: 8px 12px; 
        
        font-size: 1.25rem;
        text-decoration: none;
        color: var(--cor-secundaria);
        background-color: var(--cor-complementar-1);

        transition: 0.5s ease-in-out;
        cursor: pointer;
    
        :hover{
            background-color: var(--cor-primaria);
            filter:drop-shadow(0px 0px 8px var(--cor-primaria));
        }

        :last-child{
            margin-left: 4px;
            padding: 0rem; 

            font-size: 0.875rem;
            font-weight: bold;
            text-decoration: none;
            
            color: var(--cor-complementar-1);
            background-color: var(--background-footer);
            :hover, :focus{
                color: var(--cor-primaria);
                filter: none;
            }


        }
    }
    p{
        color: var(--cor-secundaria);
        font-size: 0.875rem;
        text-align: center;
    }
    
    img{
        margin-left: 8px;
        width: 200px;
        margin-bottom: 3rem;
        filter:drop-shadow(0px 0px 12px var(--cor-primaria));

    }

    button{
        border: none;
        border-radius: 4px;
        font-size: 1.25rem;

        margin: 2rem 0rem;
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
        
`;



