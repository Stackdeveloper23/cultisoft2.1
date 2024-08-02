import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import CustomerPage from './pages/CustomerPage';
import LayoutCustomer from './components/layout/LayoutCustomer';

function App() {

  return (
   <Router>
      <Routes>
       <Route path='/home' element={<HomePage />} /> 
       <Route path='/login' element={<Login/>}/>

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
