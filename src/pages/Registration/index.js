import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import { Container } from "./styled";

export function Registration() {
    const { signIn } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    function handleSignIn() {
        signIn(nome, email, password, passwordCheck);
    }

    return (
        <Container>
            <img src={require("../../images/logo-white.png")} />
            <h1>Criar conta</h1>
            <input placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <input placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirme sua senha" value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
            <a onClick={handleSignIn} href="/"> Continuar </a>
            <p>Já possui uma conta?
                <a href="/login">Entrar</a>
            </p>
        </Container>
    );
}
