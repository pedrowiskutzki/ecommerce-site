import { useState } from "react";
import productService from "../../service/request/productService";

export function Product() {
    const [product, setProduct] = useState([]);

    productService
        .getAll()
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });

    return (
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
    );
}
