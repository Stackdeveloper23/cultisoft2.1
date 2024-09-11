import { useEffect, useState } from "react";
import Config from "../../Config";


const Carrusel = () => {

  const [imagenes, setImagenes] = useState([]);
  useEffect(() => {
    const fetchCarruselImages = async () => {
      try {
        const data = await Config.getCarruselImages();
        console.log('Datos de la API:', data.data);
        setImagenes(data.data); // Supongamos que data es un array de objetos con la propiedad 'image_url'
      } catch (error) {
        console.error('Error fetching carousel images:', error);
      }
    };

    fetchCarruselImages();
  }, []);


  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {imagenes.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to={index}
          className={index === 0 ? 'active' : ''}
          aria-current={index === 0 ? 'true' : undefined}
          aria-label={`Slide ${index + 1}`}
        ></button>
      ))}
    </div>
    <div className="carousel-inner">
      {imagenes.map((imagen, index) => (
        <div
          key={imagen.id || index}
          className={`carousel-item ${index === 0 ? 'active' : ''}`}
        >
          <img
            src={imagen.image_url}
            alt={`Carrusel Slide ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <div className="container">
            <div className="carousel-caption text-end"></div>
          </div>
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
   /* <div
      id="myCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <img
            src={imgCarrusel1}
            alt="Carrusel Slide"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="container">
            <div className="carousel-caption text-end"></div>
          </div>
        </div>

        <div className="carousel-item">
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <img
            src={imgCarrusel1}
            alt="Carrusel Slide"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="container">
            <div className="carousel-caption text-end"></div>
          </div>
        </div>

        <div className="carousel-item">
        <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
          </svg>
          <img
            src={imgCarrusel}
            alt="Carrusel Slide"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div className="container">
            <div className="carousel-caption text-end"></div>
          </div>
        </div>


      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>*/
  );
};

export default Carrusel;
