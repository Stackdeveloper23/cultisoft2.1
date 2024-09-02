import { useState } from "react";
import Config from "../../Config";

const SoporteFormulario = () => {
  const [formData, setFormData] = useState({
    tipo_solicitud: "",
    nombre: "",
    identificacion: "",
    asunto: "",
    descripcion: '',
    movil: "",
    email: "",
    factura: "",
    categoria: "",
  });


  const Change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitCreate = async (e) => {
    e.preventDefault();
    try {
      const response = await Config.getSoporte(formData);
      console.log(response.data);  
      window.location.reload();
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        console.log('error', error)
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="col-md-7 col-lg-8  order-md-last p-3">
      <h4 className="mb-3"></h4>
      <form className="needs-validation" onSubmit={submitCreate}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="tipo_solicitud" className="form-label">
              Tipo de solicitud
            </label>

            <select
              className="form-select"
              id="tipo_solicitud"
              name="tipo_solicitud"
              value={formData.tipo_solicitud}
              onChange={Change}
              required
            >
              <option value="">Selecciona una opcion</option>
              <option value="1">queja</option>
              <option value="2">informacion</option>
              <option value="3">solicitud</option>
              <option value="4">sugerencia</option>
            </select>
            <div className="invalid-feedback">Valid tipo de solicitud is required.</div>
          </div>

          <div className="col-sm-12">
            <label htmlFor="nombre" className="form-label">
              Nombres y Apellidos
            </label>
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

          <div className="col-12">
            <label htmlFor="identificacion" className="form-label">
              Numero de Identificacion
            </label>
            <div className="input-group has-validation">
              <span className="input-group-text">#</span>
              <input
                type="text"
                className="form-control"
                id="identificacion"
                name="identificacion"
                placeholder="identificacion"
                value={formData.identificacion}
                onChange={Change}
                required
              />
              <div className="invalid-feedback">Your identificacion is required.</div>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="movil" className="form-label">
              Movil<span className="text-body-secondary">(Opcional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="movil"
              name="movil"
              placeholder="12346789"
              value={formData.movil}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>


          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email 
            </label>
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


          <div className="col-12">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              className="form-control"
              id="asunto"
              name="asunto"
              placeholder="asunto"
              value={formData.asunto}
              onChange={Change}
            />
          </div>

          <div className="col-12">
            <label htmlFor="factura" className="form-label">
              factura<span className="text-body-secondary">(Opcional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="factura"
              name="factura"
              placeholder="12346789"
              value={formData.factura}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

        
        

          <div className="col-12 mt-3">
            <label htmlFor="descripcion" className="form-label">
             Descripcion
            </label>
            <textarea
              className="form-control"
              id="descripcion"
              name="descripcion"
              placeholder="Descripcion detallada..."
              value={formData.descripcion}
              onChange={Change}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>
        </div>

        <hr className="my-4" />

    
        <hr className="my-4" />
        <button
          className="w-100 btn btn-primary btn-lg"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default SoporteFormulario;
