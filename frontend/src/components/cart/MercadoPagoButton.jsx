import { useEffect } from "react";


const MercadoPagoButton = ({ preferenceId }) => {
  useEffect(() => {
    const mp = new window.MercadoPago('TEST-2f68439c-7003-42ea-b6f5-77af2a1f2004', {
      locale: 'es-CO',
    });

    mp.checkout({
      preference: {
        id: preferenceId,
      },
      autoOpen: true, // Abre el checkout automáticamente
    });
  }, [preferenceId]);

  return <div id="mercado-pago-button"></div>;
};

export default MercadoPagoButton;
