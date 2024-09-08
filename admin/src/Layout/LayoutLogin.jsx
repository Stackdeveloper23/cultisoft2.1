import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "../pageauth/AuthUser";
import { useEffect } from "react";


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
    <Outlet/>
    
    </>
)

}
export default LayoutLogin