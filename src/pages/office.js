import React, { useEffect, useRef } from "react";
import { useState } from "react";
import produtoService from "../service/request/productService";
import { Container } from "../pages/styled";

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

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

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
                                        <span className="name">
                                            Nome: {nome}
                                        </span>
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
                <div className="buttons">
                    <button onClick={handleLeftClick}>
                        <img
                            src="/static/images/216151_right_chevron_icon.png"
                            alt="Scroll Left"
                        />
                    </button>
                    <button onClick={handleRightClick}>
                        <img
                            src="/static/images/216151_right_chevron_icon.png"
                            alt="Scroll Right"
                        />
                    </button>
                </div>
            </div>
        </Container>
    );
};
