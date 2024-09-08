

import SessionCustomer from "../auth/SessionCustomer";
import UserName from "../auth/UserName";
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
      <div className="row g-5 pt-5">
        <ModalPago/>
        <CardResumenProductos/>
        <Formulario/>
        </div>
        </div>
      </>
    )
}
export default EnvioDomicilio;