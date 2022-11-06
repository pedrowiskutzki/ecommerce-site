import React, { useState } from 'react';
import { Container,
        ProductCard,
        ProductInfo,
        OrderInfo,
        RemoveProduct,
        LastSteps} from './styled';

export const Cart = () => 
{

  const [product, setProduct] = useState("");
  const [listProducts, setListProducts] = useState([{
    id: 1,
    category: "Informática",
    name: "Sekiro: Shadows Die Twice",
    image: "https://images.g2a.com/1024x768/1x1x0/sekiro-shadows-die-twice-goty-edition-pc-steam-key-asia-i10000171455005/5b9bbc43ae653a2f8216634f",
    quantity: 1,
    price: 199.99
  }, {
    id: 2,
    category: "Livros",
    name: "Fablehaven: Rise of the Evening Star",
    image: "https://m.media-amazon.com/images/I/71AZbpvctuL.jpg",
    quantity: 1,
    price: 29.99
  }, {
    id: 3,
    category: "Escritório",
    name: "Escrivaninha Trevalla Kuadra Me150-E10 Industrial 150cm Preto Onix",
    image: "https://m.media-amazon.com/images/I/51VU1+eoXhL._AC_SX425_.jpg",
    quantity: 1,
    price: 429.99
  }
  ]);

  const removeProduct = (id) => {
    const index = listProducts.findIndex(product => product.id === id);
    const newList = listProducts;

    newList.splice(index, 1)

    calcTotal()
    setListProducts([... newList]);
  };


  //Métodos para aumentar e diminuir a quantidade de produtos
  const increaseAmount = (id) => {
    const index = listProducts.findIndex(product => product.id === id);
    const newList = listProducts;
    newList[index].quantity = newList[index].quantity + 1

    setListProducts([... newList])
    calcTotal()
  };

  const decreaseAmount = (id) => {
    const index = listProducts.findIndex(product => product.id === id);
    const newList = listProducts;
    if(newList[index].quantity === 0){
      newList[index].quantity = 0
    } else{
      newList[index].quantity = newList[index].quantity - 1
    }
    calcTotal()
    setListProducts([... newList])
  };
  // -------------------------------------------------------------------------

  const [disapear, setDisapear] = useState(false);
  const [total, setTotal] = useState("");
  const calcTotal = () =>{
    let amount = 0;

    for(let i = 0; i < listProducts.length; i++){
      amount = amount + (listProducts[i].quantity * listProducts[i].price)
    }
    setTotal("Total: " + amount.toFixed(2))

    if(!listProducts.length > 0){
      setTotal("Não há produtos no seu carrinho")
      setDisapear(true)
    }
  }



  return (
    <Container onLoad={() => calcTotal()}>
      <ul>
        {listProducts.map((product) =>(
          <>
          <ProductCard>
            <ProductInfo>
              <h2>{product.name}</h2>
              <p> <strong>Categoria: </strong>{product.category}</p>
              <img src={product.image} alt="teste"/>
            </ProductInfo>
            <OrderInfo>
                <p> <strong>Quantidade: </strong>{product.quantity}
                  <button onClick={() => increaseAmount(product.id)}>+</button>
                  <button onClick={() => decreaseAmount(product.id)}>-</button>
                </p>
                <p> <strong>Preço: </strong>  {product.price}</p>
                  <RemoveProduct onClick={() => removeProduct(product.id)}>Remover produto</RemoveProduct>
            </OrderInfo>

          </ProductCard>
          </>
        ))}
      </ul>
      <LastSteps disapear={disapear}>
        <h3>{total}</h3>
        <button>Finalizar compra</button>
      </LastSteps>
    </Container>
  );
};


