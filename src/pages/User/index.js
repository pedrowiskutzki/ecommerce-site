import { useContext } from "react";
import AuthContext from "../../context/auth";
import { useState } from "react";
import { UserCircle } from "phosphor-react";
import { Container, AccountCard, AccountForm, SignOut } from "./styled";

export function User() {
    const { signOut, userName, userEmail } = useContext(AuthContext);

    const [user, setUser] = useState("");

    const [listUser, setListUser] = useState([
        {
            id: 1,
            nome: "Jefferson Souza",
            email: "jefferson.souza@email.com",
            senha: "123456",
        },
    ]);

    const [openForm, setOpenForm] = useState(false);
    const toggleForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <Container>
            {listUser.map((user) => (
                <>
                    <AccountCard>
                        <span>
                            <UserCircle size={64} />
                        </span>
                        <h1>Informações sobre a conta</h1>
                        <p>
                            <strong>Nome:</strong> {userName}
                        </p>
                        <p>
                            <strong>Email:</strong> {userEmail}
                        </p>
                        <button onClick={() => toggleForm()}>
                            Editar conta
                        </button>

                        <AccountForm openForm={openForm}>
                            <h3>Nome</h3>
                            <input
                                name="newName"
                                placeholder="Alterar nome"
                            ></input>
                            <h3>Email</h3>
                            <input
                                name="newEmail"
                                type={"email"}
                                placeholder="Alterar email"
                            ></input>
                            <h3>Senha</h3>
                            <input
                                name="newPassword"
                                type={"password"}
                                placeholder="Alterar senha"
                            ></input>

                            <h3>Validação de usuário</h3>
                            <input
                                name="checkPassword"
                                required
                                type={"password"}
                                placeholder="Digite sua senha antiga"
                            ></input>

                            <input type={"submit"}></input>
                        </AccountForm>
                    </AccountCard>
                    <SignOut onClick={() => signOut()}>Sair da conta</SignOut>
                </>
            ))}
        </Container>
    );
}
