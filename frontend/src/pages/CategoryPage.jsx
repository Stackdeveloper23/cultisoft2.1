import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Config from '../Config';
import Navbar from "../components/common/navbar";


const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Config.getProductsByIdCategory(categoryId);
        setProducts(response); 
        console.log('response base datos', response)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categoryId]);


  return (
    <div>
        <Navbar/>
      <h1>Products in Category {categoryId}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
