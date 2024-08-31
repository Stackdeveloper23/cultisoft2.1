import SessionCustomer from "../components/auth/SessionCustomer";
import UserName from "../components/auth/UserName";
import Navbar from "../components/common/navbar";
import CardAtencion from "../components/soporte/CardAtencion";
import SoporteFormulario from "../components/soporte/SoporteFormulario";

const Soporte = () => {
    return(
<div>
<Navbar>
        <UserName />
        <SessionCustomer/>
        </Navbar>
        
  <div className="container">
      <div className="row g-5 pt-5">
        <CardAtencion/>
        <SoporteFormulario/>
        </div>
        </div>
</div>
    )
}

export default Soporte;