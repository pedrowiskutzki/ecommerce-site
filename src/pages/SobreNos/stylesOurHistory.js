import styled from "styled-components";

export const Container = styled.div`
    
    display: flex;
    max-width: 768px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    padding: 2rem;
    gap: 2rem;    
    margin: auto;
    max-width: 1024px;
    
    
`
   
export const Column = styled.div`
  background-color: var(--background-footer);
  filter: drop-shadow(2px 2px 6px black);
  border: 2px solid var(--cor-primaria);
  margin-left:10px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  text-align: right;
  height: fit-content;
  flex-wrap: wrap;
  padding: 2rem;
  text-align: center;
  max-width: 700px;
  width: auto;
  margin: auto;
  border-radius: 6px;

  @media screen and (max-width: 899px) {
     :last-child{
      flex-direction: row;
      min-height: fit-content;
    }
  }
`;

export const Text = styled.h2`
  filter: drop-shadow(2px 2px 12px var(--cor-primaria));
  text-align: center;
  font-size: 2rem;
  color: var(--cor-primaria);
  margin-bottom: 1rem;
  font-weight: bold;
  width: 100%;

`

export const BodyText = styled.p`
  text-align: justify;
  font-size: 1rem;
  color: var(--cor-secundaria);
  margin-bottom: 1rem;
  /* font-weight: bold; */

`

export const ContainerVideo = styled.div`
  background-color: var(--cor-primaria);
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 4rem;
  margin-bottom: 0%;
  position: relative;
  text-align: center;

  iframe{
    position: relative;
    top: 5%;
    left:0%;
    
  }

      
`

  
