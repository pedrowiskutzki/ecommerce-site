import { useContext, useState } from "react";
import AuthContext from "../../context/auth";
import clientService from "../../service/request/clientService";
import { Container } from "./styled";

export function Registration() {
    const { signIn } = useContext(AuthContext);

    const [nome, setNome] = useState("");
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
                <img src={require("../../images/logo-white.png")} />
                <h1>Cadastro</h1>
               
                <input required="true" placeholder="Digite seu nome" name="nome" onChange={(e) => setNome(e.target.value)} />
                <input required="true" placeholder="Digite seu e-mail" name="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                <input required="true" placeholder="Digite sua senha" name="password" type="password" onChange={(e) => setSenha(e.target.value)} />
                <input required ="true" placeholder="Confirme sua senha" name="passwordCheck" type="password" onChange={(e) => setPasswordCheck(e.target.value)}/>
                
                <button type="submit">Criar Conta</button>
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
