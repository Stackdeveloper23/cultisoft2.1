import { useState } from "react";
import Config from "../../Config";

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: "",
    departamento: "",
    ciudad: "",
    barrio: "",
    direccion: "",
    movil: "",
    movil2: "",
    email: "",
    referencias: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  const [setErrors] = useState({}); 

  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.postDatosEnvio(formData);
      console.log(response.data);
      setSubmitted(true);
    const button = document.querySelector('.w-100.btn.btn-primary.btn-lg');
    button.dataset.bsToggle = "modal";
    button.dataset.bsTarget = "#exampleModal";
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

 


  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Datos de Facturacion</h4>
      <form className="needs-validation" onSubmit={submitCreate}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="nombre" className="form-label">Nombres</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              placeholder=""
              value={formData.nombre}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="apellidos" className="form-label">Apellidos</label>
            <input
              type="text"
              className="form-control"
              id="apellidos"
              name="apellidos"
              placeholder=""
              value={formData.apellidos}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="movil" className="form-label">Movil</label>
            <div className="input-group has-validation">
              <span className="input-group-text">#</span>
              <input
                type="text"
                className="form-control"
                id="movil"
                name="movil"
                placeholder="Movil"
                value={formData.movil}
                onChange={Change}
                required
              />
              <div className="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="movil2" className="form-label">Movil 2 <span className="text-body-secondary">(Optional)</span></label>
            <input
              type="text"
              className="form-control"
              id="movil2"
              name="movil2"
              placeholder="Movil"
              value={formData.movil2}
              onChange={Change}
            />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">Email <span className="text-body-secondary">(Optional)</span></label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={Change}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-6">
            <label htmlFor="direccion" className="form-label">Direccion de envio</label>
            <input
              type="text"
              className="form-control"
              id="direccion"
              name="direccion"
              placeholder="1234 Main St"
              value={formData.direccion}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-md-5">
            <label htmlFor="departamento" className="form-label">Departamento</label>
            <input
              type="text"
              className="form-control"
              id="departamento"
              name="departamento"
              value={formData.departamento}
              onChange={Change}
            />
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="ciudad" className="form-label">Cuidad</label>
            <input
              type="text"
              className="form-control"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={Change}
            />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="barrio" className="form-label">Barrio</label>
            <input
              type="text"
              className="form-control"
              id="barrio"
              name="barrio"
              value={formData.barrio}
              onChange={Change}
            />
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-12 mt-3">
            <label htmlFor="referencias" className="form-label">Referencias Adicionales</label>
            <textarea
              className="form-control"
              id="referencias"
              name="referencias"
              placeholder="Apto 301..."
              value={formData.referencias}
              onChange={Change}
              required
            />
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
      {/*  data-bs-toggle="modal" data-bs-target="#exampleModal" */}
         <button className="w-100 btn btn-primary btn-lg" type="submit"   data-bs-toggle={submitted ? "modal" : ""}
        data-bs-target={submitted ? "#exampleModal" : ""}>Continua con el Pago</button> 
      </form>
    </div>
  );
}

export default Formulario;
