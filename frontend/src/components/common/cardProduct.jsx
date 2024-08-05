import { Link } from "react-router-dom";


const CardProduct = ({ product }) => {
    return (

        <div className="card m-3 p-3" style={{width: "18rem"}}>
  <img src={product.image_path} className="card-img-top" alt={product.name}/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">${product.price}</a>
    <Link to={`/product/${product.id}`} className="btn btn-primary">view Details</Link>
  </div>
</div>

    )
}

export default CardProduct;