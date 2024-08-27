import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";
import { useEffect } from "react";
import InicioUsers from "../pageauth/InicioUsers";


const LayoutLogin = () => {
    const { getRol } = AuthUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(!getRol()){
            navigate("/");
        }
    },[]);

return (
    <>
    <InicioUsers/>
    <Outlet/>
    
    </>
)

}
export default LayoutLogin