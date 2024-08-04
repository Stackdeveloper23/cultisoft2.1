import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import CustomerPage from './pages/CustomerPage';
import LayoutCustomer from './components/layout/LayoutCustomer';
import CategoryPage from './pages/CategoryPage';

function App() {

  return (
   <Router>
      <Routes>
       <Route path='/' element={<HomePage />} /> 
       <Route path='/login' element={<Login/>}/>
       <Route path='/category/:categoryId' element={<CategoryPage/>}/>

       <Route element={<ProtectedRoutes/>}>

      <Route path='/customer'element={<LayoutCustomer/>}>
      <Route index element={<CustomerPage/>}/>   
      </Route>

      </Route>
      </Routes>

    
     
   </Router>
  )
}

export default App
