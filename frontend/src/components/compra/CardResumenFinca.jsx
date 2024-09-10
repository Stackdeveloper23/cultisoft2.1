import { useEffect, useState } from 'react';
import Config from "../../Config";

const CardResumenFinca = () => {
  
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await Config.getCartProducts(); 
        if (response && response.data) {
          console.log('Productos del carrito:', response.data.items); 
          setCartItems(response.data.items); 
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

 // const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.product.price), 0);


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
            <span className="text-body-secondary">{(item.product.price * item.quantity).toFixed(2)}</span> 
          </li>
        ))}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (COP)</span>
          <strong>
          <span id="total" className="h5">
            {formatCurrency(
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  )}
          
            </span>
          </strong>
        </li>
      </ul>

      <h1>Para retirar tus Productos</h1>

      <p>Estamos ubicados en el Km 5 de Suba a Cota </p>

      <p>El horario de atencio es de lunes a viernes de 8am a 5pm. Puedes venir a cualquier hora</p>
    </div>
  );
};

export default CardResumenFinca;
