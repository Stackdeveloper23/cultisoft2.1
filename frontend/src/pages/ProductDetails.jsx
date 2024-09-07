import { useEffect, useState } from "react";
import Config from "../Config";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Config.getProduct(id);
        console.log("respuesta de la api", response);
        setProduct(response);
      } catch (error) {
        console.error("error al ver producto", error);
      }
    };

    fetchProducts();
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await Config.getAddToCart(id);
      console.log("Producto agregado al carrito:", response);
      // Puedes mostrar una notificación o actualizar el estado del carrito aquí
    } catch (error) {
      console.error("Error al agregar el producto al carrito:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "rgba(156, 149, 149, 0.267)" }}>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="row">
          <Link to={-1} className="mb-3">
            <button className="btn btn-primary">
              <span className="material-symbols-outlined">arrow_back</span>Atras
            </button>
          </Link>
          <div className="col-sm-6 order-md-1">
            <img
              src={product.image_path}
              className="d-block w-100"
              alt={product.name}
            />
          </div>
          <div className="col-sm-6 order-md-2">
            <h5 className="">{product.name}</h5>
            <p className="lead">{product.description}</p>
            <a href="#" className="btn btn-warning">
              ${product.price}
            </a>
            <button className="btn btn-primary ms-3" onClick={addToCart}>
              <span className="material-symbols-outlined">
                add_shopping_cart
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
