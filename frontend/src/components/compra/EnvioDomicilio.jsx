

import { Link } from "react-router-dom";
import SessionCustomer from "../auth/SessionCustomer";
import UserName from "../auth/UserName";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import CardResumenProductos from "./CardResumenProductos";
import Formulario from "./Formulario";
import ModalPago from "./ModalPago";


const EnvioDomicilio = () => {
  
    return(
<>
        <Navbar>
        <UserName />
        <SessionCustomer/>
        </Navbar>
  <div className="container">
  <Link to={-1} >
            <button className="btn btn-primary mt-3">
              <span className="material-symbols-outlined">arrow_back</span>Atras
            </button>
          </Link>
      <div className="row g-5 pt-5">
        <ModalPago/>
        <CardResumenProductos/>
        <Formulario/>
        </div>
        </div>
        
        <Footer/>
      </>
    )
}
export default EnvioDomicilio;