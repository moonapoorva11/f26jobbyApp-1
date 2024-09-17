import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const ProtectedRoute = (props)=>{

    const {Component} = props;
    const navigate = useNavigate();
    const token = Cookies.get("jwtToken");

    useEffect(()=>{

        if( token === undefined){

            navigate("/login");

        }

    },[]);

    console.log( Component );

    return <Component/>
}





export default ProtectedRoute;