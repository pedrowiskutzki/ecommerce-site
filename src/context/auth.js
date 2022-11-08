import React, { createContext, useEffect, useState } from "react";
import clienteService from "../service/request/clientService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    const [userId, setUserId] = useState("");

    const [userName, setUserName] = useState("");

    const [userEmail, setUserEmail] = useState("");

    const [client, setClient] = useState([]);

    useEffect(() => {
        async function loadStorageData() {
            const storageIsAuthenticated = await localStorage.getItem(
                "@authenticated"
            );
            const storageUserId = await localStorage.getItem("@id");
            const storageUserName = await localStorage.getItem("@user");
            const storageUserEmail = await localStorage.getItem("@email");

            console.log(storageUserName);
            console.log(storageUserId);

            if (storageIsAuthenticated && storageUserName) {
                setIsAuthenticated(true);
                setUserName(storageUserName);
            }
            if (storageIsAuthenticated && storageUserId) {
                setIsAuthenticated(true);
                setUserId(storageUserId);
            }
            if (storageIsAuthenticated && storageUserEmail) {
                setIsAuthenticated(true);
                setUserEmail(storageUserEmail);
            }
        }

        loadStorageData();
    }, []);

    useEffect(() => {
        clienteService
            .getAll()
            .then((res) => {
                setClient(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    function signIn(emailLogin, senhaLogin) {
        const listClient = client;

        for (let index = 0; index < listClient.length; index++) {
            const arrayLogin = [];

            const listaId = listClient.map((client) => client.id);
            const listaNome = listClient.map((client) => client.nome);
            const listaSenha = listClient.map((client) => client.senha);
            const listaEmail = listClient.map((client) => client.email);
            arrayLogin.unshift(listaId, listaNome, listaSenha, listaEmail);

            for (let index = 0; index < arrayLogin.length; index++) {
                const element = arrayLogin[index];

                const id = listaId[index];
                const nome = listaNome[index];
                const email = listaEmail[index];

                if (
                    emailLogin === listaEmail[index] &&
                    senhaLogin === listaSenha[index]
                ) {
                    localStorage.setItem("@authenticated", true);
                    localStorage.setItem(
                        "@token",
                        "asdfojndasipufbdSIFGBDIWogbiued"
                    );
                    localStorage.setItem("@id", id);
                    localStorage.setItem("@user", nome);
                    localStorage.setItem("@email", email);
                    setIsAuthenticated(true);
                    setUserId(id);
                    setUserName(nome);
                    setUserEmail(email);
                    return;
                }
            }
        }
    }

    function signOut() {
        setIsAuthenticated(false);
        setUserId("");
        setUserName("");
        setUserEmail("");
        localStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userId,
                userName,
                userEmail,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
