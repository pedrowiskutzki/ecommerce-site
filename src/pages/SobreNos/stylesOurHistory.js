import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 2rem;
    margin: auto;
    max-width: 768px;
    
`
   
export const Column = styled.div`
  background-color: var(--background-footer);
  margin-left:10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: right;
  min-height: 280px;
  flex-wrap: wrap;
  padding: 2rem;
  text-align: center;
  width: flex;
  border-radius: 6px;

  @media screen and (max-width: 899px) {
     :last-child{
      flex-direction: row;
      min-height: fit-content;
    }
  }
`;

export const Text = styled.h2`
  text-align: center;
  font-size: 24px;
  color: var(--cor-primaria);
  margin-bottom: 1rem;
  font-weight: bold;
  width: 100%;

`

export const BodyText = styled.p`
  text-align: justify;
  font-size: 16px;
  color: var(--cor-secundaria);
  margin-bottom: 1rem;
  /* font-weight: bold; */

`