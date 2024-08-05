import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Config from '../Config';
import Navbar from "../components/common/navbar";
import CardProduct from '../components/common/cardProduct';


const CategoryPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');

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

    const fetchCategory = async () => {
      try{
        const response = await Config.getCategoryById(categoryId);
        setCategoryName(response.name);
      }catch (error){
        console.error('error category', error)
      }
    };

    fetchCategory();
    fetchProducts();
  }, [categoryId]);


  return (
    <div>
        <Navbar/>
        <div className="container">
      <h1 className='d-flex justify-content-center mt-4'>Category {categoryName}</h1>
      <div className='card-container d-flex flex-wrap justify-content-center'>
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default CategoryPage;
