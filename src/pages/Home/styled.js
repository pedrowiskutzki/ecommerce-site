
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 75vw;
  display: flex;
//  flex-direction:flex;
  //justify-content: space-around;
 //align-items:end;  
  //align-items: ;

.item {
  background-color: blue;
  margin: 40px;
  padding: 10px;
  width: 280px;
  border-radius: 12px;
  box-shadow: 0px 0px 20px  var(--cor-complementar-1);
   display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;   
}

.item .image img {
  width: 250px;
  height: 280px;
  object-fit: cover;
  border-radius: 16px;
}

.item .info {
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item .info span {
  display: block;
  text-align: center;
  color: black;
  padding: 5px;
  border-radius: 10px;
}

.item .info .name {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  color: #00a8fb;
}

.item .info .descricao {
  font-size: 0.8rem;
  flex-grow: 1;
  color: white;
}

.item .info .price {
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: yellow;
}

.buttons {
  width: 100%;
  text-align: center;
}
.buttons button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.buttons button:first-child img {
  transform: rotate(180deg);
}
`;