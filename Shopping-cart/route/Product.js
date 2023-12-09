import React from 'react';
import './Product.css'

const Product = ({ product, addToCart }) => {
  return (
    <div className='main-cont'>
      
      <div className='single-product'>
      <img src={product.img} alt={product.name} className='image' /><br />
      {product.name} - ${product.price}
     <br/> <button onClick={() => addToCart(product)}>Add to Cart</button>
     
    </div>
    </div>
    
  );
};

export default Product;

