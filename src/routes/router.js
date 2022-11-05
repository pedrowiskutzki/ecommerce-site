import AuthContext from "../context/auth";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/index";
import { Computing } from "../pages/computing";
import { Office } from "../pages/office";
import { Bookstore } from "../pages/bookstore";
import { Cart } from "../pages/cart";
import { Login } from "../pages/Login/index";
import { useContext } from "react";

export function Router() {
    //Validação de Login não permite acessar as outras areas sem autenticação
    const { isAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Login />} />
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
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}
