import SessionCustomer from "../auth/SessionCustomer";
import UserName from "../auth/UserName";
import Navbar from "../common/navbar";


const EnvioDomicilio = () => {
    return(
<>
        <Navbar>
        <UserName />
        <SessionCustomer/>
        </Navbar>
  <div className="container">
      <div className="row g-5 pt-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Tus Productos</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
        </div>


        {/* Formulario */}
        
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Datos de Facturacion</h4>
          <form className="needs-validation" >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">Nombres</label>
                <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
  
              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">Apellidos</label>
                <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
  
              <div className="col-12">
                <label htmlFor="username" className="form-label">Movil</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">#</span>
                  <input type="text" className="form-control" id="username" placeholder="Movil" required/>
                <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">Movil 2 <span className="text-body-secondary">(Optional)</span></label>
                <input type="text" className="form-control" id="address2" placeholder="Movil"/>
              </div>
  
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
                <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
  
              <div className="col-12">
                <label htmlFor="address" className="form-label">Direccion de envio</label>
                <input type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
  
           
  
              <div className="col-md-5">
                <label htmlFor="country" className="form-label">Departamento</label>
                <input type="text" className="form-control"  />
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
  
              <div className="col-md-4">
                <label htmlFor="state" className="form-label">Barrio</label>
                <input type="text" className="form-control"  />
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="address" className="form-label">Referencias Adicionales</label>
                <textarea type="text" className="form-control" id="address" placeholder="Apto 301..." required/>
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>
              
            </div>
  
            
  
            <hr className="my-4"/>
  
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="same-address"/>
              <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
  
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="save-info"/>
              <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
            </div>
  
            <hr className="my-4"/>
  
            <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
          </form>
        </div>
      </div>
      </div>
      </>
    )
}
export default EnvioDomicilio;