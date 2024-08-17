import { Link } from "react-router-dom";
import styles from '../../assets/style/carrito.module.css';
import { useEffect, useState } from "react";
import MercadoPagoButton from "./MercadoPagoButton";
import Config from "../../Config";

const Cart = () => {
  const [preferenceId, setPreferenceId] = useState(null);

  useEffect(() => {
    const createPreference = async () => {
      try {
        const response = await Config.CreatePreference({
          title: 'Producto de ejemplo',
          quantity: 1,
          price: 100,
        });
        setPreferenceId(response.data.id);
      } catch (error) {
        console.error('Error al crear la preferencia de pago:', error);
      }
    };
  
    createPreference();
  }, []);

    return(
<div className={styles.card + " mt-3 mb-5"}>
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
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio/UND</th>
                <th>subtotal</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            
              <tr>
              
                
          <td></td>
          <td>
          <input type="number" min="1" max="10" step="1"
            size="1" id="cantidad"/>
          </td>
            <td> <span id="precio"></span></td>
        
        <td> 
        <span id="subtotal" name="subtotal"></span>
            
            
            </td>
            <td>

          <Link id="eliminar" className="btn btn-warning btn-sm"  data-bs-toggle="modal" data-bs-target="#eliminamodal">Eliminar</Link>
        </td>
        </tr>
       
      
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
            <div className="row">Precio Total</div>
            <span id="total" className="h4"></span>
          </div>
          <div className="row">
        {preferenceId ? (
        <MercadoPagoButton preferenceId={preferenceId} />
      ) : (
        <p>Cargando...</p>
      )}
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
    )
}

export default Cart;