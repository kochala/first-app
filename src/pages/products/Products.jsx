import React, { useEffect, useState } from 'react';
import "./Products.css"
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../products/api';

const Products = () => {
  const { Products_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getSingleProducts(Products_id);
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, [Products_id]);

  return (
    <div>
      {product ? (
        <div className='products-div'>
            <div className='products-images'>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product Image ${index + 1}`} />
          ))}
        </div>
            <div className='products-main-image'>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className='products-info'>
              <h1>{product.title}</h1>
              <h3>catehory-{product.category}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p> 

            </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Products;
