
import img1 from "../../assets/img/tiposFlores.jpg";
import img2 from "../../assets/img/imagen.jpg";
import img3 from "../../assets/img/flor.jpg";

const SectionCategory = () => {
    return(
        <div className="container">
<div className="row">

      <div className="col-lg-4">
      <img 
    src={img1}
    alt="Imagen de ejemplo" 
    className="bd-placeholder-img rounded-circle" 
    width="140" 
    height="140" 
    style={{ objectFit: 'cover' }} 
  />
        <h2 className="fw-normal">Todo tipo de flores</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>

      <div className="col-lg-4">
      <img 
    src={img2}
    alt="Imagen de ejemplo" 
    className="bd-placeholder-img rounded-circle" 
    width="140" 
    height="140" 
    style={{ objectFit: 'cover' }} 
  />
        <h2 className="fw-normal">Maximo Cuidado</h2>
        <p>Another exciting bit of representative placeholder content. This time, weve moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>

      <div className="col-lg-4">
      <img 
    src={img3}
    alt="Imagen de ejemplo" 
    className="bd-placeholder-img rounded-circle" 
    width="140" 
    height="140" 
    style={{ objectFit: 'cover' }} 
  />
        <h2 className="fw-normal">La mejor Calidad</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>
    </div>

    )
}
export default SectionCategory;