import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName, setUserName] = useState("")


    useEffect(() => {
        async function loadStorageData() {
            const storageIsAuthenticated = await localStorage.getItem('@authenticated');
            const storageUserName = await localStorage.getItem('@user');

            if (storageIsAuthenticated && storageUserName) {
                setIsAuthenticated(true)
                setUserName(storageUserName)
            }
        }

        loadStorageData()

    }, [])


    function signIn(email, password) {
        if (email === "pedro" && password === "123") {
            localStorage.setItem('@authenticated', true)
            localStorage.setItem('@token', "asdfojndasipufbdSIFGBDIWogbiued")
            localStorage.setItem('@user', "Pedro")
            setIsAuthenticated(true)
            setUserName("Pedro")
            return
        }

    }

    function signOut() {
        setIsAuthenticated(false)
        setUserName("")
        localStorage.clear()
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;