import { Link } from "react-router-dom";
import Footer from "../common/footer";
import Navbar from "../common/navbar";
import ModalPago from "./ModalPago";
import CardResumenFinca from "./CardResumenFinca";
import FormularioFinca from "./FormularioFinca";

const RetiroFinca = () => {
    return(
<div>
    <Navbar/>
<div className="container">
<Link to={-1} >
            <button className="btn btn-primary mt-3">
              <span className="material-symbols-outlined">arrow_back</span>Atras
            </button>
          </Link>
      <div className="row g-5 pt-5">
        <ModalPago/>
        <CardResumenFinca/>
        <FormularioFinca/>
        </div>
        </div> 
    <Footer/>
    </div>
    )
}
export default RetiroFinca;