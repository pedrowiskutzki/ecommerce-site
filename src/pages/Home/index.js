
import { useContext } from "react"
import AuthContext from '../../context/auth'
import { CarouselContainer } from "../../components/Carousel"

export function Home() {
    const { signOut, userName } = useContext(AuthContext);

    return (
        <>
            <CarouselContainer/>
            <h1 style={{marginBottom: "2rem"}}>Ola {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>
        </>
    );
}