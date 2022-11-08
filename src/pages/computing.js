import React, { useEffect } from "react";
import { useState } from "react";
import produtoService from "../service/request/productService";

export const Computing = () => {
    const [product, setProduct] = useState([]);
    const [escrivaniha, setEscrivaniha] = useState([]);
    const [inferno, setInferno] = useState([]);
    const [tablet, setTablet] = useState([]);

    const cadeiraBx9 = 1;
    const Escrivaniha = 2;
    const Inferno = 3;
    const Tablet = 5;

    useEffect(() => {
        produtoService
            .get(cadeiraBx9)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        produtoService
            .get(Escrivaniha)
            .then((res) => {
                console.log(res.data);
                setEscrivaniha(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        produtoService
            .get(Inferno)
            .then((res) => {
                console.log(res.data);
                setInferno(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        produtoService
            .get(Tablet)
            .then((res) => {
                console.log(res.data);
                setTablet(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    return (
        <div>
            <div>
                <img
                    src={product.fotoLink}
                    alt={`image_${product.descricao}`}
                    height="400"
                />
                <p>{`Nome: ${product.nome}`}</p>
                <p>{`Descrição: ${product.descricao}`}</p>
                <p>{`Valor: ${product.valor},00`}</p>
                <p>{`Categoria: ${product.nomeCategoria}`}</p>
                <p>{`Funcionario: ${product.nomeFuncionario}`}</p>
                <p>{`Quantidade em estoque: ${product.qtdEstoque}`}</p>
            </div>
            <div>
                <img
                    src={escrivaniha.fotoLink}
                    alt={`image_${escrivaniha.descricao}`}
                    height="400"
                />
                <p>{`Nome: ${escrivaniha.nome}`}</p>
                <p>{`Descrição: ${escrivaniha.descricao}`}</p>
                <p>{`Valor: ${escrivaniha.valor},00`}</p>
                <p>{`Categoria: ${escrivaniha.nomeCategoria}`}</p>
                <p>{`Funcionario: ${escrivaniha.nomeFuncionario}`}</p>
                <p>{`Quantidade em estoque: ${escrivaniha.qtdEstoque}`}</p>
            </div>
            <div>
                <img
                    src={inferno.fotoLink}
                    alt={`image_${inferno.descricao}`}
                    height="400"
                />
                <p>{`Nome: ${inferno.nome}`}</p>
                <p>{`Descrição: ${inferno.descricao}`}</p>
                <p>{`Valor: ${inferno.valor},00`}</p>
                <p>{`Categoria: ${inferno.nomeCategoria}`}</p>
                <p>{`Funcionario: ${inferno.nomeFuncionario}`}</p>
                <p>{`Quantidade em estoque: ${inferno.qtdEstoque}`}</p>
            </div>
            <div>
                <img
                    src={tablet.fotoLink}
                    alt={`image_${tablet.descricao}`}
                    height="400"
                />
                <p>{`Nome: ${tablet.nome}`}</p>
                <p>{`Descrição: ${tablet.descricao}`}</p>
                <p>{`Valor: ${tablet.valor},00`}</p>
                <p>{`Categoria: ${tablet.nomeCategoria}`}</p>
                <p>{`Funcionario: ${tablet.nomeFuncionario}`}</p>
                <p>{`Quantidade em estoque: ${tablet.qtdEstoque}`}</p>
            </div>
        </div>
    );
};
