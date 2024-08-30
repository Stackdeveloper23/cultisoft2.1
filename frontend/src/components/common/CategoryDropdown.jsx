import { useState, useEffect } from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';

const CategoryDropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Función para obtener las categorías
    const fetchCategories = async () => {
      try {
        const response = await Config.getAllCategories();
        //console.log('categorias', response)
        // Asegúrate de que response.data sea un array antes de usar setCategories
        if (Array.isArray(response)) {
          setCategories(response);
        } else {
          console.error('Unexpected response data format:', response);
          setCategories([]); // Inicializa como array vacío si el formato es incorrecto
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]); // Inicializa como array vacío en caso de error
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fas fa-user fa-fw"></i>
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`} className="dropdown-item" >{category.name}</Link>
            </li>
          ))
        ) : (
          <li>No categories available</li> // Mensaje en caso de no haber categorías
        )}
        
      </ul>
    </div>
  );
};

export default CategoryDropdown;
