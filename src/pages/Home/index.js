import { useContext } from "react";
import AuthContext from "../../context/auth";
import EmblaCarousel from "../../components/Carousel";
import { Container, NomeCategoria } from "./styled";
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
            <EmblaCarousel slides={slides} />
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