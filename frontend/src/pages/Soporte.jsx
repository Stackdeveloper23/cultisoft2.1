
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import CardAtencion from "../components/soporte/CardAtencion";
import SoporteFormulario from "../components/soporte/SoporteFormulario";

const Soporte = () => {
    return(
<div>
<Navbar/>
        
  <div className="container">
      <div className="row g-5 pt-5">
        <CardAtencion/>
        <SoporteFormulario/>
        </div>
        </div>
        <Footer/>
</div>
    )
}

export default Soporte;