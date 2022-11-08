import { useContext } from "react";
import AuthContext from "../../context/auth";
import EmblaCarousel from "../../components/Carousel";
import { Container } from "./styled";
import produtoService from "../../service/request/productService";
import { Bookstore } from "../bookstore";
import { Computing } from "../computing";
import { Office } from "../office";

export function Home() {
    const { signOut, userName } = useContext(AuthContext);
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return (
       
        <>
            <h1 style={{marginTop:"2rem"}}>Ola, {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>
            <EmblaCarousel slides={slides} />
        </>

    );
}