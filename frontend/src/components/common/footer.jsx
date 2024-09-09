import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import { useEffect, useState } from "react";
import Config from "../../Config";


const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

    
    useEffect(() => {
        const getProducts = async (page) => {
            try {
                const response = await Config.getCategories(page);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    useEffect(() => {
      const getProducts = async (page) => {
          try {
              const response = await Config.getProducts(page);
              setProducts(response.data);
          } catch (error) {
              console.error('Error fetching products:', error);
          }
      };

      getProducts();
  }, []);
    return(

        <div id="footer">
  <footer className="container py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Categorias</h5>
        <ul className="nav flex-column">
  {categories.map((category, index) => (
    <li key={index}>
      <Link to={`/category/${category.id}`} className="custom-link">{category.name}</Link>
    </li>
  ))}
</ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Productos</h5>
        <ul className="nav flex-column">
  {products.map((product, index) => (
    <li key={index}>
      <Link to={`/product/${product.id}`} className="custom-link">{product.name}</Link></li>
  ))}
</ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Paginas</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to={'/soporte'} className="nav-link p-0 text-body-secondary">Soporte al Cliente</Link></li>
          <li className="nav-item mb-2"><Link to={'/customer/cart'} className="nav-link p-0 text-body-secondary">Carrito</Link></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <div className="row mt-5">
          
    <p className="float-end d-flex justify-content-end"><a href="#">Back to top</a></p>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> <strong>Necesitas ayuda?</strong><br />
          Habla con nuestro Chatbot</button>
        <Chatbot/>
      </div>
      </div>
    
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <Link to={'https://www.facebook.com'}>
        <li className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg></li></Link>
<Link to={'https://www.twitter.com'}>
        <li className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg></li></Link>
<Link to={"https://www.instagram.com"}>
        <li className="ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg></li></Link>
      </ul>
    </div>
  </footer>
</div>

    )
}

export default Footer;