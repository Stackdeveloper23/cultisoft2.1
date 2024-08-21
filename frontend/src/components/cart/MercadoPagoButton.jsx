import { useEffect } from "react";
import Config from "../../Config";


const MercadoPagoButton = () => {
  useEffect(() => {
    // Cargar el script de Mercado Pago
    const script = document.createElement('script');
    script.src = 'https://sdk.mercadopago.com/js/v2';
    script.async = true;
    document.body.appendChild(script);

    script.onload = async () => {
        const mp = new window.MercadoPago('APP_USR-19e68a3d-9f89-41ee-ac7f-d6ce4e10bd49', {
            locale: 'es-CO' // Cambia esto según tu país
        });

        try{
        // Crear la preferencia de pago
        const response = await Config.CreatePreference( {
            title: 'Producto de ejemplo',
            quantity: 1,
            price: 100.0
        });

        console.log('api response:', response);
        if (response && response.data && response.data.id) {
        // Inicializar el botón de pago
        mp.checkout({
            preference: {
                id: response.data.id
            },
            render: {
                container: '#payment-button', // El ID del elemento donde se mostrará el botón
                label: 'Pagar', // El texto del botón
            }
        });
      } else {
        console.error("Error: La respuesta de la API no contiene un ID de preferencia.");
    }
} catch (error) {
    console.error("Error al crear la preferencia de pago:", error);
}
    };

    return () => {
        document.body.removeChild(script);
    };
}, []);

return <div id="payment-button"></div>;
};

export default MercadoPagoButton;
