import { useEffect, useState } from "react";
import Config from "../../Config";
import ImagenEdit from "./ImagenEdit";

const CarruselImages = () => {

  const [imagenes, setImagenes] = useState([]);
 
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Config.getCarruselImages();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
            setImagenes(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setImagenes([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setImagenes([]);
      }
    };

    fetchCategories();
  }, []);
  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Carrusel</h1>
      <div className="container">
        <div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              
              <th scope="col">URL</th>
              <th scope="col">Imagen </th>
              <th scope="col">Editar:</th>
            </tr>
          </thead>
          <tbody>
            {imagenes.map((imagen, index) => (
              <tr key={imagen.id || index}>
                
                <td>{imagen.id || "N/A"}</td>
                <td  className="w-25" >{imagen.image_url || "N/A"}</td>
                <td>
              {imagen.image_url ? (
                <img
                  src={imagen.image_url}
                  alt={`Imagen ${imagen.id}`}
                  style={{ width: '100px', height: 'auto' }} 
                    />
              ) : (
                "N/A"
              )}
            </td>
             <td>
            <ImagenEdit id={imagen.id} /></td> 
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarruselImages;

