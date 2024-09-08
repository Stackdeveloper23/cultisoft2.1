import { Link } from "react-router-dom";

const Cardpage = () => {
    return(
        <div className="row">
                           
                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Clientes</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="crudCliente/crudcliente.php">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-secondary text-white mb-4">
                                    <div className="card-body">Categorias</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link className="small text-white stretched-link" to="/admin/category">View Details</Link>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Usuarios</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link to={'/admin/user'} className="small text-white stretched-link">View Details</Link>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-dark text-white mb-4">
                                    <div className="card-body">Carrito de compras</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="carrito.html">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">Compras</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <Link className="small text-white stretched-link" to={'/admin/compra'}>View Details</Link>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-3">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Soporte al Cliente</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="soporte.html">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            </div>
    )
}
export default Cardpage;