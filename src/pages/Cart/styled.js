import styled from 'styled-components';

export const Container = styled.div`
    max-width: 768px;
    min-height: 65vh;
    margin: auto;
    padding: 2rem;
    gap: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const ProductCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: fit-content;
    width: 100%;

    padding: 1rem;
    align-items: center;
    border-bottom: 1px solid #d9d9d9;
    background-color: white;

    :last-child{
        border: none;
    }
    
    @media screen and (max-width: 450px){
        justify-content: center;
    }
    `;

export const ProductInfo = styled.div`
    img{
        max-width:140px;
        max-height:120px;
        width: auto;
        height: auto;
        border-radius: 6px;
        margin: 0.5rem 0rem;
    }
    h2{
    
        padding: 0.5rem 0rem;
        max-width: 450px;
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-word;
        
        @media screen and (max-width: 750px){
        width: 350px;
        max-width: 420px;

        }

        @media screen and (max-width: 400px){
        width: auto;
        }
    }

    p{
        font-size: 0.875rem;
        color: var(--cor-secundaria);
        width: fit-content;
        padding: 0.2rem 0.5rem;
        border-radius: 2rem;
        
        margin-bottom: 0.5rem;
        background-color: var(--cor-primaria);
    }

    @media screen and (max-width: 658px){
        width: 100%;
        text-align: center;
        align-items: center;

        h2{
            font-size: 2rem;
            display: block;
            margin: auto;
        }
        p{
            display: block;
            margin: auto;
        }
        img{
            margin: 1.25rem;
            max-width:250px;
            max-height:300px;
            width: auto;
            height: auto;
            border-radius: 6px;
        }
    }

`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.75rem;
    position: relative;
    top: 1.5rem;

    p{
        button{
            font-weight: bold;
            font-size: 1rem;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 28px;
            width: 28px;

            padding: 0.5rem;
            margin-left: 1rem;
            transition: 0.5s ease-in-out;
            
            border: none;
            border-radius: 50%;
            background-color: var(--cor-primaria);
            color: var(--cor-secundaria);

            :focus, :hover{
                background-color: var(--cor-complementar-1);
            }
        }
    }
    @media screen and (max-width: 658px){
        width: fit-content;
        margin: auto;
        position: static;
    }
`;
export const RemoveProduct = styled.button`
    font-size: 0.875rem;
    background-color: var(--cor-complementar-2);
    border: none;
    border-radius: 6px;
    color: var(--cor-secundaria);
    padding: 0.5rem;
    transition: 0.3s ease-in-out;
    :focus, :hover{
        background-color: var(--cor-vermelho);
    }
`;

export const LastSteps = styled.div`
    text-align: center;

    h3{
        display: inline-flex;
        padding: 0.75rem 1.5rem;
        border-radius: ${(props) => props.disapear == true ? "50px" : "50px 0px 0px  50px"};

        font-size: ${(props) => props.disapear == true ? "2rem" : "1rem"};
        background-color: ${(props) => props.disapear == true ? "none" : "var(--cor-complementar-2)"};
        color: ${(props) => props.disapear == true ? "var(--cor-complementar-2)" : "var(--cor-secundaria);"};
        opacity:  ${(props) => props.disapear == true ? "0.3" : "1"};
    }
    button{
        display: ${(props) => props.disapear == true ? "none" : "inline-flex"};
        border-radius: 0px 50px 50px  0px;
        border: none;

        padding: 0.75rem 1rem;
        transition: 0.3s ease-in-out;

        font-size: 1rem;
        background-color: var(--cor-primaria);
        color: var(--cor-secundaria);

        :focus, :hover{
            background-color: var(--cor-complementar-1);
        }
    }

    @media screen and (max-width: 375px) {
        h3{
            display: block;
            border-radius: 50px;
            margin-bottom: 1rem;
        }

        button{
            border-radius: 50px;
        }
    }

`