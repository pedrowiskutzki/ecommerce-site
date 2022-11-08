import React, { useEffect, useRef } from "react";
import { useState } from "react";
import produtoService from "../service/request/productService";

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

    if (!category || !category.length) return null;
    const informatica = 1;

    return (
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
                    if (idCategoria === informatica) {
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
                                        U$ Valor: ${valor.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};
