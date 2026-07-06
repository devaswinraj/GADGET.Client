
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProductList from './pages/Products';
import Details from './pages/Details';
import CreateProduct from './pages/Create';
import UpdateProduct from './pages/Update';




let App = () => {

    let location = useLocation();

    let hideNavbar = ["/login", "/signUp"].includes(location.pathname)

    return (

        <>


            {!hideNavbar && <NavBar />}




            <Routes>

                <Route path={"/login"} element={<Login />} />

                <Route path={"/signUp"} element={<SignUp />} />

                <Route path={"/"} element={<Home />} />

                <Route path={"/products"} element={<ProductList />} />

                <Route path={"/products/:id"} element={<Details />} />

                <Route path={"/products/create"} element={<CreateProduct />} />

                <Route path={"/products/update/:id"} element={<UpdateProduct />} />


            </Routes>



        </>
    )
}

export default App