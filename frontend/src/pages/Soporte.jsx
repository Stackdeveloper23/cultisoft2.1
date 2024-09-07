
import { useEffect, useState } from "react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";
import CardAtencion from "../components/soporte/CardAtencion";
import SoporteFormulario from "../components/soporte/SoporteFormulario";
import { Link } from "react-router-dom";

const Soporte = () => {
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const getToken = () => {
      const tokenString = sessionStorage.getItem("token");
      if (tokenString) {
        try {
          const token = JSON.parse(tokenString);
          return token;
        } catch (error) {
          console.error("Error parsing token from sessionStorage:", error);
          return null;
        }
      }
      return null;
    };
    setIsAuthenticated(!!getToken());
  }, []);
    return(
<div>
<Navbar/>
        
  <div className="container">
      <div className="row g-5 pt-5">
      <Link to={isAuthenticated ? "/customer" : "/"} className="mb-3">
            <button className="btn btn-primary">
              <span className="material-symbols-outlined">arrow_back</span>Atras
            </button>
          </Link>
        <CardAtencion/>
        <SoporteFormulario/>
        </div>
        </div>
        <Footer/>
</div>
    )
}

export default Soporte;