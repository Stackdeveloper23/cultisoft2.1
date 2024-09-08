import { useEffect, useState } from 'react';
import CardProduct from './cardProduct';
import Config from '../../Config';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    
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

    return (
        <div className=" d-flex justify-content-center">
        <div className="card-container d-flex flex-wrap justify-content-center" style={{maxWidth: "1200px"}}>
            {products.map(product => (
                <CardProduct key={product.id} product={product} />
            ))}
            </div>
        </div>
    );
};

export default ProductList;
