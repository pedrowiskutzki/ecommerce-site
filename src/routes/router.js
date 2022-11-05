import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/index'
import { Computing } from '../pages/computing';
import { Office } from '../pages/office';
import { Bookstore } from '../pages/bookstore';
import { Cart } from '../pages/cart';
import { SignIn } from "../pages/signin";



export function Router() {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/computing' element={<Computing/>} />
            <Route path='/office' element={<Office/>} />
            <Route path='/bookstore' element={<Bookstore/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
    )
}