import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import CustomerPage from './pages/CustomerPage';
import LayoutCustomer from './components/layout/LayoutCustomer';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import MetodoRetiro from './pages/MetodoRetiro';
import EnvioDomicilio from './components/compra/EnvioDomicilio';
import Soporte from './pages/Soporte';
import RetiroFinca from './components/compra/RetiroFinca';
import ResetPasswordPage from './components/auth/ResetPasswordPage';

function App() {

  return (
   <Router>
      <Routes>
       <Route path='/' element={<HomePage />} /> 
       <Route path='/login' element={<Login/>}/>
       <Route path='/category/:categoryId' element={<CategoryPage/>}/>
       <Route path='/product/:id' element={<ProductDetails/>}/>
       <Route path='/soporte' element={<Soporte/>}/>
       <Route path='/reset-password' element={<ResetPasswordPage/>}/>

       <Route element={<ProtectedRoutes/>}>

      <Route path='/customer'element={<LayoutCustomer/>}>
      <Route index element={<CustomerPage/>}/>
      <Route path='cart' element={<ShoppingCart/>}/>   
      <Route path='/customer/compra' element={<MetodoRetiro/>}/>
      <Route path='/customer/compra/domicilio' element={<EnvioDomicilio/>}/>
      <Route path='/customer/envio/finca' element={<RetiroFinca/>}/>
      
      </Route>

      </Route>
      </Routes>

    
     
   </Router>
  )
}

export default App
