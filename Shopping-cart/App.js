// App.js
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Product from './route/Product';
import Cart from './route/Cart';
import img1 from './route/Car.jpg';
import img2 from './route/Gun.jpg';
import img4 from './route/chaco.jpg';
import img3 from './route/iPhone.jpeg';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', img: img1, price: 220 },
    { id: 2, name: 'Product 2', img: img2, price: 120 },
    { id: 3, name: 'Product 3', img: img3, price: 500 },
    { id: 4, name: 'Product 3', img: img4, price: 60 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const removeFromCart = (productId) => {
  //   const updatedCart = cart.map((item) =>
  //     item.id === productId ? { ...item } : item
  //   );
  
  //   const indexToRemove = updatedCart.findIndex((item) => item.id === productId);
  //   updatedCart.splice(indexToRemove, 1);
  
  //   setCart(updatedCart);
  // };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div className='bg'>
        <center>
          <h1>Shopping Cart</h1>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h2>Products</h2>
                  <div className='link'><Link to="/cart"><button>Go to Cart</button></Link></div>

                  <ul className='product'>
                    {products.map((product) => (
                      <Product key={product.id} product={product} addToCart={addToCart} />
                    ))}
                  </ul>
                </div>
              }
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal} />}
            />
          </Routes>
        </center>
      </div>
    </Router>
  );
};

export default App;
