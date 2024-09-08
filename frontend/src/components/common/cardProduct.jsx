import { Link } from "react-router-dom";


const CardProduct = ({ product }) => {
    return (

        <div className="card m-3 p-3" style={{width: "18rem"}}>
  <img src={product.image_path} className="card-img-top" height="200" alt={product.name}/>
  <div className="card-body d-flex flex-column justify-content-between">
    <div>
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
    </div>

    <div className="d-flex justify-content-between mt-auto">
    <a href="#" className="btn btn-primary">${product.price}</a>
    <Link to={`/product/${product.id}`} className="btn btn-primary">ver detalles</Link>
    </div>
  </div>
</div>

    )
}

export default CardProduct;