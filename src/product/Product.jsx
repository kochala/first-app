import axios from 'axios';
import "./Product.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
        .then(response => {
            setProducts(response.data.products);
        })
        .catch(error => {
            console.error('მონაცემების წაკითხვის შეცდომა:', error);
        });
  }, []);

  if (products.length === 0) { 
    return <p>Loading...</p>;  
  }

  return (
    
    <div className='all-product'>
      {products.map((product) => (
        <Link to={`../Products/${product.id}`} key={product.id}>
        <div  className='product'>
          <p className='product-title'>{product.title}</p>
          <p className='product-price'>Price: ${product.price}</p>
          <img src={product.thumbnail} className='product' alt={product.title} />
          <div className='add-to-cart'> 
            <span>add to cart</span>

          </div> 
        </div>
        </Link>
      ))}
    </div> 
   
  );
}

export default Product;



