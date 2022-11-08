import React, { useEffect, useRef } from "react";
import { useState } from "react";
import produtoService from "../service/request/productService";
import { Container } from "../pages/Home/styled";


export const Office = () => {
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

    if (!category || !category.length) return null;
    const office = 2;

    return (
        <Container>
        <div className="container">
            <div className="carousel" ref={carousel}>
                {category.map((item) => {
                    const {
                        id,
                        idCategoria,
                        nome,
                        valor,
                        descricao,
                        fotoLink,
                    } = item;
                    if (idCategoria === office) {
                        return (
                            <div className="item" key={id}>
                                <div className="image">
                                    <img
                                        src={fotoLink}
                                        alt={nome}
                                        height="400"
                                    />
                                </div>
                                <div className="info">
                                    <span className="name">Nome: {nome}</span>
                                    <br />
                                    <span className="descricao">
                                        Descrição: {descricao}
                                    </span>
                                    <br />
                                    <span className="price">
                                         Valor: R${valor.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
        </Container>
    );
};
