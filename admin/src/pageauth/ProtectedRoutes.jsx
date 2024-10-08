
import { Navigate, Outlet } from 'react-router-dom'
import AuthUser from './AuthUser'

const ProtectedRoutes = () => {
    const {getToken} = AuthUser()
    if(!getToken()){
        return <Navigate to={'/login'}/>
    }
    return (
       <Outlet/>
    )
}
export default ProtectedRoutes