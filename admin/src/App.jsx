import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutLogin from "./Layout/LayoutLogin";
import ProtectedRoutes from "./pageauth/ProtectedRoutes";
import Login from "./pageauth/Login";
import LayoutAdmin from "./Layout/LayoutAdmin";
import PanelAdmin from './pageadmin/PanelAdmin';
import CategoryPage from './pageadmin/CategoryPage';
import UserPage from './pageadmin/UserPage';
import ProductPage from './pageadmin/ProductPage';
import CompraPage from './pageadmin/CompraPage';
import SoportePage from './pageadmin/SoportePage';
import CaruselPage from './pageadmin/CaruselPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LayoutLogin />} />
                <Route path="/login" element={<Login />} />
                
                <Route element={<ProtectedRoutes />}>
                    <Route path="/admin" element={<LayoutAdmin />} />
                    <Route index element={<PanelAdmin/>}/>
                    <Route path='/admin/category' element={<CategoryPage/>}/>                   
                    <Route path='/admin/user' element={<UserPage/>}/>
                    <Route path='/admin/product' element={<ProductPage/>}/>
                    <Route path="/admin/compra" element={<CompraPage/>}/>
                    <Route path='/admin/soporte' element={<SoportePage/>}/>
                    <Route path='/admin/carrusel' element={<CaruselPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;