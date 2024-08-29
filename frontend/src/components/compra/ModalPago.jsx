import { useNavigate } from "react-router-dom";
import MercadoPagoButton from "../cart/MercadoPagoButton";
import Config from "../../Config";
import { useEffect, useState } from "react";

const ModalPago = () => {
 
  const [cartsId, setCartId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartId = async () => {
      const response = await Config.getCartProducts(); 
      console.log('id de carrito', response)
      console.log('id carrito', response.data.id)
      setCartId(response.data.id);
    };

    fetchCartId();
  }, []);

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
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              Este es el valor total a pagar: 
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