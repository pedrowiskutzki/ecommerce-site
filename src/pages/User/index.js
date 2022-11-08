import { useContext, useEffect, useRef } from "react";
import AuthContext from "../../context/auth";
import { useState } from "react";
import { UserCircle } from "phosphor-react";
import { Container, AccountCard, AccountForm, SignOut } from "./styled";
import clientService from "../../service/request/clientService";

export function User() {
    const { signOut, userName, userEmail, userId } = useContext(AuthContext);

    const [user, setUser] = useState();
    const [Id, setId] = useState();

    /*  const put_id = useRef(null);
    const put_email = useRef(null);
    const put_name = useRef(null);

    const [putResult, setPutResult] = useState(null);

    const fortmatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    };

    async function putData() {
        const id = put_id;

        if (id) {
            const putData = {
                name: put_name,
                email: put_email,
            };

            try {
                const res = await apiClient.put(`/tutorials/${id}`, putData, {
                    headers: {
                        "x-access-token": "token-value",
                    },
                });

                const result = {
                    status: res.status + "-" + res.statusText,
                    headers: res.headers,
                    data: res.data,
                };

                setPutResult(fortmatResponse(result));
            } catch (err) {
                setPutResult(fortmatResponse(err.response?.data || err));
            }
        }
    } */

    useEffect(() => {
        clientService
            .update(userId, user, {
                headers: {
                    "x-access-token": "token-value",
                },
            })
            .then((res) => {
                console.log(res.data);
                setId(res.data.update);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    console.log("UUUUSER:", user);

    const [openForm, setOpenForm] = useState(false);
    const [openFormExclusion, setOpenFormExclusion] = useState(false);

    const toggleForm = () => {
        setOpenForm(!openForm);
    };
    const toggleFormExclusion = () => {
        setOpenFormExclusion(!openFormExclusion);
    };

    useEffect(() => {
        clientService
            .remove(userId)
            .then((res) => {
                console.log(res.data);
                setId(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    useEffect(() => {
        clientService
            .get(userId)
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    console.log("UUUUSER:", userId);

    return (
        <Container>
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
                    <button onClick={() => toggleForm()}>Editar Conta</button>
                    <button onClick={() => toggleFormExclusion()}>
                        Excluir Conta
                    </button>

                    <AccountForm openForm={openForm}>
                        <h3>Nome</h3>
                        <input
                            name="newName"
                            /* ref={put_name} */
                            placeholder="Alterar nome"
                        ></input>
                        <h3>Email</h3>
                        <input
                            name="newEmail"
                            /* ref={put_email} */
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
                    <AccountForm openForm={openFormExclusion}>
                        {/* <h3>Senha</h3>
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
                        ></input> */}
                        <input
                            onClick={() => signOut()}
                            type={"submit"}
                        ></input>
                    </AccountForm>
                </AccountCard>
                <SignOut onClick={() => signOut()}>Sair da conta</SignOut>
            </>
        </Container>
    );
}
