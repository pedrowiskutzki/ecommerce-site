import React, { createContext, useEffect, useState } from "react";
import clienteService from "../service/request/clientService";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");
    const [client, setClient] = useState([]);

    useEffect(() => {
        async function loadStorageData() {
            const storageIsAuthenticated = await localStorage.getItem("@authenticated");
            const storageUserName = await localStorage.getItem("@user");

            if (storageIsAuthenticated && storageUserName) {
                setIsAuthenticated(true);
                setUserName(storageUserName);
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

    function signIn(email, senha) {
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
                const nome = listaNome[index];
                if (email === listaEmail[index] && senha === listaSenha[index]) {
                    localStorage.setItem("@authenticated", true);
                    localStorage.setItem("@token", "asdfojndasipufbdSIFGBDIWogbiued");
                    localStorage.setItem("@user", `${nome}`);
                    setIsAuthenticated(true);
                    setUserName(`${nome}`);
                    return;
                }
            }
        }
    }

    function signOut() {
        setIsAuthenticated(false);
        setUserName("");
        localStorage.clear();
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
