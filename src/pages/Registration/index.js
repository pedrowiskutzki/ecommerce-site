import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import clientService from "../../service/request/clientService";
import { Container } from "./styled";

export function Registration() {
    const { signIn } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const handleChange = (event) => {
        setNome({ nome: event.target.value });
        setEmail({ email: event.target.value });
        setSenha({ senha: event.target.value });
        setPasswordCheck({ passwordCheck: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            nome: nome,
            usuario: usuario,
            email: email,
            senha: senha,
            passwordCheck: passwordCheck,
        };
        console.log(user);
        clientService.create(user).then((res) => {
            console.log(res);
            console.log(res.data);
            /* setNome(res.data); */
        });
    };

    return (
        <Container onSubmit={handleSubmit}>
            <div>
                <h1>Criar conta</h1>
                <img src={require("../../images/logo-white.png")} />
                <form>
                    <input placeholder="Digite seu nome" name="nome" onChange={(e) => setNome(e.target.value)} />
                    <input
                        placeholder="Digite seu apelido"
                        name="usuario"
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                    <input placeholder="Digite seu e-mail" name="email" onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Digite sua senha" name="password" onChange={(e) => setSenha(e.target.value)} />
                    <input
                        placeholder="Confirme sua senha"
                        name="passwordCheck"
                        onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
            {/*  <h1>Criar conta</h1>

            <input placeholder="Digite seu nome" name="nome" onChange={(e) => setNome(e.target.value)} />
            <input placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirme sua senha"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <a onClick={"submit"} href="/">
                {" "}
                Continuar{" "}
            </a>

            <p>
                Já possui uma conta?
                <a href="/login">Entrar</a>
            </p> */}
        </Container>
    );
}

/*   function handleSignIn() {
        signIn(nome, email, password, passwordCheck);
        clientService
            .create(signIn)
            .then((res) => {
                console.log(signIn);
                console.log(res.signIn);
            })
            .catch((err) => console.log(err));
    }
        /* const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            clientService.create(formData);
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err));
    }
 */
