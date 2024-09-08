import { useState, useEffect } from 'react';
import Config from '../../Config';
import { Link } from 'react-router-dom';

const CategoryDropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Config.getAllCategories();
        if (Array.isArray(response)) {
          setCategories(response);
        } else {
          console.error('Unexpected response data format:', response);
          setCategories([]); 
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([]); 
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="dropdown-container">
      <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fas fa-user fa-fw">Categorias</i>
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        
        {categories.length > 0 ? (
          categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`} className="dropdown-item" >{category.name}</Link>
            </li>
          ))
        ) : (
          <li>No categories available</li> 
              )}
        
      </ul>


  <div className="dropdown-overlay"></div>
    </div>
  );
};

export default CategoryDropdown;
