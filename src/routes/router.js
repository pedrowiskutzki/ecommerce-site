import AuthContext from "../context/auth";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Computing } from "../pages/computing";
import { Office } from "../pages/office";
import { Bookstore } from "../pages/bookstore";
import { Cart } from "../pages/Cart/index";
import { Login } from "../pages/Login/index";
import { Registration } from "../pages/Registration/index";
import { useContext } from "react";
import { AboutUs, OurHistory } from "../pages/SobreNos/ourHistory";

export function Router() {
    //Validação de Login não permite acessar as outras areas sem autenticação
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/computing" element={<Computing />} />
                <Route path="/office" element={<Office />} />
                <Route path="/bookstore" element={<Bookstore />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/ourHistory" element={<AboutUs />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/computing" element={<Computing />} />
            <Route path="/office" element={<Office />} />
            <Route path="/bookstore" element={<Bookstore />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Home />} />
            <Route path="/registration" element={<Home />} />
            <Route path="/ourHistory" element={<AboutUs />} />
        </Routes>
    );
}
