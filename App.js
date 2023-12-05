import './App.css';

import React, { useState } from 'react';
import img1 from './assest/img1.png';
import img2 from './assest/img2.png';
import img3 from './assest/img3.png';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', img: img1, price: 10 },
    { id: 2, name: 'Product 2', img: img2, price: 15 },
    { id: 3, name: 'Product 3', img: img3, price: 20 },
    
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='bg' >
      <center>
      <h1>Shopping Cart</h1>
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <p key={product.id}>
              <img src={product.img} alt={product.name} /><br/>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </p>
          ))}
        </ul>
      </div>

      <div>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <p key={item.id} >
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </p>
            ))}
          </ul>
        )}
        <p>Total: ${cartTotal}</p>
      </div>
      </center>
    </div>
  );
};

export default App;


