
import imgCarrusel from '../../assets/img/carrusel3.jpg'
import imgCarrusel1 from '../../assets/img/carrusel1.jpg'




const Carrusel = () => {
    return(
        <section className="page-section" style={{backgroundColor: "#f8bbc8c7"}}>
        <div className="row" id="carrusel">
    
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={imgCarrusel} />
              </div>
              <div className="carousel-item">
                <img src={imgCarrusel1}  />
              </div>
              <div className="carousel-item">
                <img src="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev" style={{borderRadius: "200px", width: "50px"}}>
              <span className="carousel-control-prev-icon" style={{backgroundColor: "rgb(170, 170, 170)"}}aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next" style={{borderRadius: "200px", width: "50px"}}>
              <span className="carousel-control-next-icon" style={{backgroundColor: "rgb(170, 170, 170)", borderRadius: "100%"}} aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    
        </div>
      </section>
    
    )
}

export default Carrusel