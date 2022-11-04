import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 5px 5px;
  background: seagreen;
  position: absolute;
  bottom: 0;
  width: 100%;
  
     
  @media (max-width: 1024px) {
    flex-wrap: nowrap;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
   
    @media (max-width: 1024px) {
    flex-wrap: wrap;
    
  }

`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-left: 60px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    width: 100%;
  }
  
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color:#FFFF00;
  margin-bottom: 40px;
  font-weight: bold;
`;


