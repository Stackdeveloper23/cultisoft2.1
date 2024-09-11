import { Link } from "react-router-dom";
import logo from "../assets/logoCultisoft.svg";

const Sidervar = () => {
  return (
    <div
      className="d-flex flex-column p-3 pe-0 text-bg-dark border-end border-secondary"
      style={{ height: "100%" }}
    >
      <a
        href="/admin"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <img src={logo} alt="" width="40" />
        <span className="fs-4">Cultisoft</span>
      </a>
      <hr></hr>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link
            to={"/admin"}
            className="nav-link text-white d-flex"
            aria-current="page"
          >
            <span className="material-symbols-outlined me-2">home</span>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/admin/carrusel"} className="nav-link text-white d-flex">
            <span className="material-symbols-outlined me-2">person</span>
            Carrusel
          </Link>
        </li>
        <li>
          <Link to={"/admin/user"} className="nav-link text-white d-flex">
            <span className="material-symbols-outlined me-2">person</span>
            Usuarios
          </Link>
        </li>
        <li>
          <Link to={"/admin/category"} className="nav-link text-white d-flex">
            <span className="material-symbols-outlined me-2">category</span>
            Categorias
          </Link>
        </li>
        <li>
          <Link to={"/admin/product"} className="nav-link text-white d-flex">
            <span className="material-symbols-outlined me-2">shopping_bag</span>
            Productos
          </Link>
        </li>
       <li>
          <Link to={"/admin/compra"} className="nav-link text-white d-flex">
             <span className="material-symbols-outlined me-2">shopping_bag</span>
            Compras
          </Link>
        </li>
        <li>
          <Link to={"/admin/soporte"} className="nav-link text-white d-flex">
          <span className="material-symbols-outlined">
support_agent
</span>
            Soporte
          </Link>
        </li>
      </ul>
      <hr />

      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Cultisofts Admin
      </div>
    </div>
  );
};
export default Sidervar;
