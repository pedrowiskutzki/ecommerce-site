import { useContext } from "react"
import AuthContext from '../../context/auth'

export function Home() {
    const { signOut, userName } = useContext(AuthContext)
    
    return (
        <div>
            <h1>Ola {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    )
}