import { Route, Routes } from "react-router-dom";
import { Home } from '../pages/index'
import { About } from '../pages/about';
import { Services } from '../pages/services';
import { Contact } from '../pages/contact';
import { SignUp } from '../pages/signup';
import { SignIn } from "../pages/signin";



export function Router() {
    
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact-us' element={<Contact/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
    )
}