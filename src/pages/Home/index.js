import { useContext } from "react";
import AuthContext from "../../context/auth";
import { Container, NomeCategoria } from "./styled";
import produtoService from "../../service/request/productService";
import { Bookstore } from "../bookstore";
import { Computing } from "../computing";
import { Office } from "../office";

export function Home() {
    const { signOut, userName } = useContext(AuthContext);

    return (
       <>
            <Container>
                <h1>Bem vindo, <strong>{userName}</strong>!</h1>

                    <NomeCategoria>Informática</NomeCategoria>
                    <Computing/>
                    <NomeCategoria>Livraria</NomeCategoria>
                    <Bookstore/>
                   <NomeCategoria>Escritório</NomeCategoria>
                <Office/>
            </Container>
        </>
    );
}
     //               const { id, name, price, oldPrice, image } = item;
    //   return (
    //     <div className="item" key={}>
    //       <div className="image">
    //         <img src={} alt={} />
    //       </div>
    //       <div className="info">
    //         <span className="name">{}</span>
    //         <span className="oldPrice">U$ {}</span>
    //         <span className="price">R$ {}</span>
    //       </div>
    //     </div>



