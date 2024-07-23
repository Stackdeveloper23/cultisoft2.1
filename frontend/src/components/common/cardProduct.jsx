

const CardProduct = ({ product }) => {
    return (

        <div className="card" style={{width: "18rem"}}>
  <img src={product.image_path} className="card-img-top" alt={product.name}/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary">${product.price}</a>
  </div>
</div>

    )
}

export default CardProduct;