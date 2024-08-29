import { useEffect, useState } from 'react';
import Config from "../../Config";

const CardResumenProductos = () => {
  
  const [cartItems, setCartItems] = useState([]);

  // Función para obtener los productos del carrito cuando el componente se monta
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await Config.getCartProducts(); // Llama a la función para obtener los productos
        if (response && response.data) {
          console.log('Productos del carrito:', response.data.items); // Verifica los datos recibidos
          setCartItems(response.data.items); // Almacena los productos en el estado
        }
      } catch (error) {
        console.error('Error al traer productos al carrito:', error);
      }
    };

    fetchCartProducts(); 
  }, []);

  const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  };

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.product.price), 0);


  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Tus Productos</span>
        <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
      </h4>
      <ul className="list-group mb-3">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.product.name}</h6>
             {/*<small className="text-body-secondary">{item.product.description}</small> */}  
            </div>
            <span className="text-body-secondary">{formatCurrency(parseFloat(item.product.price))}</span> 
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (COP)</span>
          <strong>
          {formatCurrency(totalAmount)}
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default CardResumenProductos;
