import { useNavigate } from "react-router-dom"
import AuthUser from "../pageauth/AuthUser"
import { useEffect } from "react"
import PanelAdmin from "../pageadmin/PanelAdmin"

const LayoutAdmin = () => {
    const { getRol } = AuthUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(getRol()!="admin"){
            navigate("/")
        }
    },[])
    return (
        <>
        <PanelAdmin/>
      
        
        </>
    )
}
export default LayoutAdmin