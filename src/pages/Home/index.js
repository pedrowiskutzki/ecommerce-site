import { useContext } from "react";
import AuthContext from "../../context/auth";
import EmblaCarousel from "../../components/Carousel";

export function Home() {
    const { signOut, userName } = useContext(AuthContext);
    const SLIDE_COUNT = 6;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <div>
            <EmblaCarousel slides={slides} />
            <h1 style={{marginTop:"2rem"}}>Ola, {userName}</h1>
            <button onClick={() => signOut()}>Sair</button>
        </div>
    );
}
