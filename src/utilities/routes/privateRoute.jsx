import { useSelector } from "react-redux"
import { selectLogin } from "redux/users/userSelector"
import {Route, redirect, Navigate} from "react-router-dom"
import {Routes} from "react-router-dom"   


export const PrivateRoute = ({children, path}) => {
    const login = useSelector(selectLogin)

    // return ( <Routes>
    //     <Route>{login ? children : redirect("/")}</Route>
    // </Routes>)

    return login ? children : <Navigate to="/" />;
}