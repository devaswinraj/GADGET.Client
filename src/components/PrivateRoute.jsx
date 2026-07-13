import { Navigate } from "react-router-dom";





let PrivateRoute = ({ children }) => {


    let token = localStorage.getItem('token')

    if (!token) {

        return <Navigate to={"/login"} replace />

    } else {

        return children;
    }

}

export default PrivateRoute;