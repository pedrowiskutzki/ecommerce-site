import React, { useEffect, useRef } from "react";
import { useState } from "react";
import produtoService from "../service/request/productService";
import { Container,
        Item,
        NomeProduto,
        DescricaoProduto,
        ValorProduto } from "../pages/styled";


export const Computing = () => {
    const [category, setCategory] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        produtoService
            .get(category)
            .then((res) => {
                console.log(res.data);
                setCategory(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!category || !category.length) return null;
    const informatica = 1;

    return (
        <Container>
            
               
                    {category.map((item) => {
                        const {
                            id,
                            idCategoria,
                            nome,
                            valor,
                            descricao,
                            fotoLink,
                        } = item;
                        if (idCategoria === informatica) {
                            return (
                                <Item className="item" key={id}>
                                    <div className="image">
                                        <img src={fotoLink} alt={nome} />
                                    </div>
                                    <div className="info">
                                        <NomeProduto className="name">
                                            {nome}
                                        </NomeProduto>
                                        <br />
                                        <DescricaoProduto className="descricao">
                                            {descricao}
                                        </DescricaoProduto>
                                        <br />
                                        <ValorProduto className="price">
                                            R$: {valor.toFixed(2)}
                                        </ValorProduto>
                                    </div>

                                </Item>
                            );
                        }
                    })}

            
        </Container>
    );
};
