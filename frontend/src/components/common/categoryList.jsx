import { useEffect, useState } from 'react';
import Config from '../../Config';
import CardCategory from './cardCategory';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    
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

    return (
        <div className="container">
        <div className=" d-flex justify-content-center">
        <div className="card-container d-flex flex-wrap justify-content-center">
            
            {categories.map(category => (
                <CardCategory key={category.id} category={category} />
            ))}
            </div>
        </div>
        </div>
    );
};

export default CategoryList;
