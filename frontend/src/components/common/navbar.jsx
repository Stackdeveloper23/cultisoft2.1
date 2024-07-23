import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.png';


const navbar = () => {
return (
    <nav className="navbar navbar-expand-lg d-flex"  style={{ flexDirection: "column", backgroundColor: "#FFF8DC"}}>
  <div className="container-fluid col-sm-12" > 
    <Link to="/home" className="navbar-brand">
    <img
                        src={logo}
                        className="navbar-brand"
                        alt="logo"
                        style={{ width: "80px", height: "auto" }}
                    />
                    </Link>

                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>

      {/* boton soporte*/}
      <div style={{paddingRight: "15px"}}>
            <button type="button" className="btn btn-outline-warning">
              <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                href="inicio_sesion.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                Soporte
              </a>
            </button>
        </div>   

         {/*cuenta */}
          <div style={{paddingRight: "15px"}}>
            <button type="button" className="btn btn-outline-warning">
              <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                href="inicio_sesion.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                Cuenta
              </a>
            </button>
        </div>

      {/* account icon*/ }
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <span className="material-symbols-outlined" style={{fontSize: "40px"}}>
          account_circle
          </span>
                <li className="nav-item dropdown">
                
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="">Logout</a></li>
                    </ul>
                </li>
            </ul>

  </div>

  <div className="container col-sm-12">

    {/*ubicacion */}
    <div>
  Ingresa tu ubicacion
</div>


    {/*boton categorias */}
  <div style={{paddingRight: "15px"}}>
            <button type="button" className="btn btn-outline-warning">
              <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                href="inicio_sesion.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                Categorias
              </a>
            </button>
        </div> 

{/* boton carrito */}
<div style={{paddingRight: "15px"}}>
            <button type="button" className="btn btn-outline-warning position-relative">
              <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)"}}
                href="">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3"
                  viewBox="0 0 16 16">
                  <path
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                carrito
                <span id=" num_cart" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
               </span>
                  <span  className="visually-hidden">unread messages</span>
              </a>
            </button>
          </div>


     {/* ingresar*/}
          <div style={{paddingRight: "15px"}}>
            <button type="button" className="btn btn-outline-warning">
              <a className="icon-link icon-link-hover" style={{"--bs-icon-link-transform": "translate3d(0, -.125rem, 0)" }}
                href="inicio_sesion.php">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person"
                  viewBox="0 0 16 16">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                ingresar
              </a>
            </button>
        </div>     
</div>
</nav>
 
)

};

export default navbar;
