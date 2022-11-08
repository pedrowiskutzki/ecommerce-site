import { useContext, useState } from "react";
import clientService from "../../service/request/clientService";
import { Container } from "./styled";

export function Registration() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            nome: nome,
            senha: senha,
            email: email,
            passwordCheck: passwordCheck,
        };

        clientService.create(user).then((res) => {
            console.log(res);
            console.log(res.data);
        });
    };

    return (
        <Container onSubmit={handleSubmit}>
            <img
                src={require("../../images/logo-white.png")}
                alt='Logo - Representada por um homem andando com um carrinho de compras em cima do nome da empresa "O Wall-Line"'
            />
            <h1>Cadastro</h1>

            <input
                required="true"
                placeholder="Digite seu nome"
                name="nome"
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                required="true"
                placeholder="Digite seu e-mail"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                required="true"
                placeholder="Digite sua senha"
                name="password"
                type="password"
                onChange={(e) => setSenha(e.target.value)}
            />
            <input
                required="true"
                placeholder="Confirme sua senha"
                name="passwordCheck"
                type="password"
                onChange={(e) => setPasswordCheck(e.target.value)}
            />

            <button type="submit">Criar Conta</button>
            <p>
                Já possui uma conta?
                <a href="/login">Entrar</a>
            </p>
        </Container>
    );
}
