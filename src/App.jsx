
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import ProductList from './pages/Products';
import Details from './pages/Details';
import CreateProduct from './pages/Create';
import UpdateProduct from './pages/Update';
import PrivateRoute from './components/PrivateRoute';




let App = () => {

    let location = useLocation();

    let hideNavbar = ["/login", "/signUp"].includes(location.pathname)

    return (

        <>


            {!hideNavbar && <NavBar />}




            <Routes>

                <Route path={"/login"} element={<Login />} />

                <Route path={"/signUp"} element={<SignUp />} />

                <Route path={"/"} element={<PrivateRoute> <Home /> </PrivateRoute>} />

                <Route path={"/products"} element={<PrivateRoute> <ProductList /> </PrivateRoute>} />

                <Route path={"/products/:id"} element={<PrivateRoute> <Details /> </PrivateRoute>} />

                <Route path={"/products/create"} element={<PrivateRoute> <CreateProduct /> </PrivateRoute>} />

                <Route path={"/products/update/:id"} element={<PrivateRoute> <UpdateProduct /> </PrivateRoute>} />


            </Routes>



        </>
    )
}

export default App