import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../Config";

const AuthUser = () => {
    const navigate = useNavigate();

    const getToken =()=>{
        const tokenString = sessionStorage.getItem('token')
        const token = JSON.parse(tokenString)
        return token;
    }

    const getUser =()=>{
        const userString = sessionStorage.getItem('user')
        const user = JSON.parse(userString)
        return user;
    }

    const getRol =()=>{
        const rolString = sessionStorage.getItem('rol')
        const rol = JSON.parse(rolString)
        return rol;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [rol, setRol] = useState(getRol());

    const saveToken=(user,token,rol) =>{
        sessionStorage.setItem('user',JSON.stringify(user))
        sessionStorage.setItem('token',JSON.stringify(token))
        sessionStorage.setItem('rol',JSON.stringify(rol))

        setUser(user)
        setToken(token)
        setRol(rol)

        //rol : admin | client

        if(getRol()==="admin")
            navigate('/admin')
        if(getRol()==="writer")
            navigate('/writer')
        if(getRol()==="reader")
            navigate('/reader')
    }

   const getLogout = async() =>{
    try{
        const response = await Config.getLogout();
        sessionStorage.clear()
        navigate('/')
    }
    catch (error) {
      console.error('Error al cerrar sesión:', error);
      // Manejo de errores, como mostrar un mensaje al usuario
    }
  };
 
    return {
        setToken:saveToken,
        token,
        user,
        rol,
        getToken,getRol,getUser,getLogout
    }
}

export default AuthUser