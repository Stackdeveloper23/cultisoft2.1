import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AuthUser from '../auth/AuthUser'

const LayoutCustomer = () => {
        const { getRol } = AuthUser()
        const navigate = useNavigate()
    
        useEffect(()=>{
            if(getRol()!="customer"){
                navigate("/home")
            }
        },[])
    return (
        <>
      <Outlet/>
        </>
    )
}
export default LayoutCustomer