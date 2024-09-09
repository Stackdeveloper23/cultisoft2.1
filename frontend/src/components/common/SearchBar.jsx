import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../../Config';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ products: [], categories: [] });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            if (query.length === 0) return;
            setLoading(true);
            try {
                const response = await Config.SearchBar(query);
                console.log('Results:', response.data);
                setResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };

        const debounceTimer = setTimeout(() => {
            fetchResults();
        }, 300); 

        return () => clearTimeout(debounceTimer); 
        }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${query}`);
    };

    /*const handleSuggestionClick = (item) => {
        setQuery(item.name);
        navigate(`/search?query=${item.name}`);
    };*/

    const handleSuggestionClick = (item) => {
        if (item.type === 'product') {
            navigate(`/product/${item.id}`);
        } else if (item.type === 'category') {
            navigate(`/category/${item.id}`);
        }
    };


  //  console.log('Products:', results.products);
//console.log('Categories:', results.categories);

    return (
        <div>
            <form className="d-flex" style={{width: "100%"}} onSubmit={handleSearch}>
            <div className="input-group">
      
           
  <input
    className="form-control"
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  /> <span className="input-group-text">
  <i className="material-symbols-outlined">search</i>
</span>
    </div>
            </form>
            {loading && <div>Loading...</div>}
            {query.length > 0 && (
                <div className="dropdown-menu show">
                    <div className="p-2">
                        <h6>Productos</h6>
                        <ul className="list-group">
                            {results.products.map((product, index )=> (
                                <li
                                    key={product.id ? `product-${product.id}` : `product-${index}`} 
                                    className="list-group-item"
                                    onClick={() => handleSuggestionClick({ id: product.id, name: product.name, type: 'product' })}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {product.name}
                                </li>
                            ))}
                        </ul>
                        <h6>Categorias</h6>
                        <ul className="list-group">
                            {results.categories.map((category, index)=> (
                                <li
                                    key={category.id ? `category-${category.id}` : `category-${index}`} 
                                    className="list-group-item"
                                    onClick={() => handleSuggestionClick({id: category.id, name: category.name, type: 'category'})}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
