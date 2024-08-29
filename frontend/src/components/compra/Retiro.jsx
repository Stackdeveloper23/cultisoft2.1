import { Link } from "react-router-dom";

const Retiro = () => {
    return(
        <div className="d-flex justify-content-center" style={{ backgroundColor: " #98FB98", height: "89vh", padding:"100px" }}>

<div className="row ">
  <div className="card-dialog" role="document">
    <div className="card-content bg-body-secondary rounded-4 shadow">
      <div className="card-body p-5">
        <h2 className="fw-bold mb-0">Como quieres recibir tus productos</h2>

     
        <div className="d-flex flex-column ">
            <div className="w-100 d-flex justify-content-center p-5 ">
                
                <button className="btn btn-lg btn-primary w-50"><Link className="text-decoration-none text-light" to={'/customer/compra/domicilio'}>
                Envio a Domicilio</Link>
                </button>
                
</div>
<div className="w-100 d-flex justify-content-center">
<button className="btn btn-lg btn-success w-50">Retiro en la finca</button>
</div>
</div>
     </div>
    </div>
  </div>
</div>
</div>
    )
}
export default Retiro;