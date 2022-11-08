import { useContext } from "react";
import AuthContext from "../../context/auth";
import { Container } from "./styled";
import produtoService from "../../service/request/productService";
import { Bookstore } from "../bookstore";
import { Computing } from "../computing";
import { Office } from "../office";

export function Home() {
    const { signOut, userName } = useContext(AuthContext);

    return (
       <>
        <div>
            <h1>Ola, {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>
            <Bookstore/>
            <Computing/>
            <Office/>
        </div>

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



