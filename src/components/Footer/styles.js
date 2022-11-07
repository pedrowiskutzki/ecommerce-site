import styled from 'styled-components';
   
export const Box = styled.div`
  background: var(--background-footer);
  position: relative;
  max-width: 100%;
  padding: 1rem 0rem;
  margin: auto;
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
`
   
export const Column = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: right;
  min-height: 280px;
  min-width: 300px;
  flex-wrap: wrap;
  padding: 2rem;
  text-align: center;

  @media screen and (max-width: 899px) {
    :last-child{
      flex-direction: row;
      min-height: fit-content;
    }
  }
`;
   
export const Row = styled.div`
  display: flex;
  height: fit-content;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
   
export const FooterLink = styled.a`
  color: var(--cor-secundaria);
  opacity: 0.7;
  font-size: 18px;
  text-decoration: none;
  transition: 0.5s ease-in-out;
 
  &:hover, :focus {
      color: var(--cor-secundaria);
      opacity: 1;
  }

  i{
    font-size: 2rem;
    :hover, :focus{
      color: var(--cor-primaria);
      opacity: 1;
      transition: 0.5s ease-in-out;
    }
  }
   
`;

export const Heading = styled.p`
  text-align: center;
  font-size: 24px;
  color: var(--cor-primaria);
  margin-bottom: 1rem;
  font-weight: bold;
`;


