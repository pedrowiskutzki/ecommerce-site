import { useContext } from "react";
import AuthContext from "../../context/auth";
import { Bookstore } from "../bookstore";
import { Computing } from "../computing";
import { Office } from "../office";

export function Home() {
    const { signOut, userName } = useContext(AuthContext);

    return (
        <div>
            <h1>Ola, {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>

            <Bookstore />
            <Computing />
            <Office />
        </div>
    );
}
