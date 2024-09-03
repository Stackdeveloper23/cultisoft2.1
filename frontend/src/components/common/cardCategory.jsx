import { Link } from "react-router-dom"
import rose from "../../assets/img/RoseCard.jpg"

const CardCategory = ({ category }) =>{
    return (
 
<div className="container">
<hr className="featurette-divider"/>

<div className="row featurette">
  <div className="col-md-7">
    <h2 className="featurette-heading fw-normal lh-1">{category.name}</h2>
    <p className="lead">{category.description}</p>
    <Link to={`/category/${category.id}`}><button className="btn btn-primary">Ver Detalles</button></Link>
  </div>
  <div className="col-md-5">
  <img 
    src={rose} 
    alt="Descripción de la imagen" 
    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" 
    width="250" 
    height="300" 
    style={{ objectFit: 'cover' }} 
  />
  </div>
</div>
</div>
    )
}

export default CardCategory