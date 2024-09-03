import { Link } from "react-router-dom";
import styles from '../../assets/style/carrito.module.css';
import { useEffect, useState } from "react";
import Config from "../../Config";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Obtener los productos del carrito del usuario
    const fetchCartItems = async () => {
      try {
        const response = await Config.getCartProducts();
        
        console.log('Datos del carrito:', response.data);
        const data = response.data;
     
        if (Array.isArray(data.items)) {
          setCartItems(data.items);
        } else {
          console.error('Los datos del carrito no son un array:', data.items);
          setCartItems([]);  // Establece un array vacío si no es un array
        }
      } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
      }
    };

    fetchCartItems();
   
  }, []);


  function handleQuantityChange(itemId, quantity) {
    const newQuantity = parseInt(quantity, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
      return;
    }
  
    const updateQuantity = async () => {
      try {
        const response = await Config.CartQuantity(itemId, newQuantity);
        if (response.status === 200) {
          setCartItems(prevItems =>
            prevItems.map(item =>
              item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
          );
        }
      } catch (error) {
        console.error('Error al actualizar la cantidad del producto:', error);
      }
    };
  
    updateQuantity();
  }

  function handleRemoveItem(itemId) {
    // Llamar a la API para eliminar el producto del carrito
  const removeItem = async () => {
    try {
      const response = await Config.getCartDelete(itemId);
      if (response.status === 200) {
        // Filtrar el producto eliminado del estado local
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
      }
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  removeItem();
  }

  const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  };

    return(
<div className={styles.card + " mt-5 mb-5"}>
    <div className="row">
      <div className={`col-md-8 ${styles.cart}`}>

        <div className={styles.title}>
          <div className="row">
            <div className="col">
              <h4><b>Carro de compras</b></h4>
            </div>
            <div className="col align-self-center text-right text-muted"></div>
          </div>
        </div>


        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio/UND</th>
                <th>subtotal</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            
            {cartItems.map(item => (
                  <tr key={item.id}>
                    <td>{item.product.name}</td>
                    <td>
                      <input 
                        type="number" 
                       
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      style={{width: "3rem"}}
                      />
                    </td>
                    <td>{item.product.price}</td>
                    <td>{(item.product.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Link 
                        id="eliminar" 
                        className="btn btn-warning btn-sm" 
                        data-bs-toggle="modal" 
                        data-bs-target="#eliminamodal"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Eliminar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

          <div className={`col-md-4 ${styles.summary}`}>
          <div>
            <h5><b>Resumen</b></h5>
          </div>
         
          <div className="row">
            <div className="col" style={{paddingLeft: "10px"}}>ARTÍCULOS: 3</div>
            
          </div>
        

          <div className="row" style={{borderTop: "1px solid rgb(0, 0, 0)", padding: "2vh 0"}}>
            <div className="row"><h4>Precio Total:</h4></div>
            <span id="total" className="h4">
            {formatCurrency(
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  )}
          
            </span>
          </div>
          <div className="row d-flex justify-content-center">
          <Link to={'/customer/compra'}> <button className="btn btn-primary w-50" type="button">
              Comprar</button></Link>
      
        </div>
        </div>

       
                 
        <div className=" w-25 h-25 mt-0">
          <button className={`volver btn mt-0`} type="submit" style={{textDecoration: "none"}}>
            <Link to='/customer' className="icon-link icon-link-hover"  style={{color: "green", textDecoration: "none"}}
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left"
              viewBox="0 0 16 16">
              <path 
                  d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5">
              </path>
          </svg>Agregar mas productos
            </Link>
          </button>
        </div>
        </div>


        
      </div>
    );

    
}

export default Cart;