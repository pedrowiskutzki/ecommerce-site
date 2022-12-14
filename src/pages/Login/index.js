import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import { Container } from "./styled";

export function Login() {
    const { signIn } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <Container>
            <img src={require("../../images/logo-white.png")} alt='Logo - Representada por um homem andando com um carrinho de compras em cima do nome da empresa "O Wall-Line"' />
            <h1>Acessar conta</h1>
            <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignIn}> Entrar </button>
            <p>
                Ainda não tem uma conta?
                <a href="/registration">Cadastre-se</a>
            </p>
        </Container>
    );
}
