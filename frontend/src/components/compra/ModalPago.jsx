import { useNavigate } from "react-router-dom";
import MercadoPagoButton from "../cart/MercadoPagoButton";
import Config from "../../Config";
import { useEffect, useState } from "react";

const ModalPago = () => {
 
  const [cartsId, setCartId] = useState(null);
  const navigate = useNavigate();
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
          setCartItems([]); 
        }
      } catch (error) {
        console.error('Error al obtener los productos del carrito:', error);
      }
    };

    fetchCartItems();
   
  }, []);

  useEffect(() => {
    const fetchCartId = async () => {
      const response = await Config.getCartProducts(); 
      console.log('id de carrito', response)
      console.log('id carrito', response.data.id)
      setCartId(response.data.id);
    };

    fetchCartId();
  }, []);

  const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
  };

  const Cancel = async () => {
    if (!cartsId) {
      console.error('No se ha encontrado el ID del carrito');
      return;
    }

    try{
      const response = await Config.deleteCompra(cartsId);
      console.log('respuesto api', response);
      navigate('/customer'); 
     } catch (error) {
      console.error("error al eliminar la compra", error)
     }
    }
    return (
        <div  className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Tu compra esta casi lista</h1>
            </div>
            <div className="modal-body">
              Este es el valor total a pagar: 
              <span id="total" className="h5">
            {formatCurrency(
    cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0)
  )}
          
            </span>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={Cancel}>Cancelar Compra</button>
             
            <MercadoPagoButton/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ModalPago;