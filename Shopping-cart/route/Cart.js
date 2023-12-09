// Cart.js
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart, cartTotal }) => {
  return (
    <div className='cart-item'>
      <Link to="/">home</Link>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='item'>
          {cart.map((item) => (
            <div key={item.id} className='cart-item-container'>
              <img src={item.img} alt={item.name} className='image'/>
              <p>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </p>
            </div>
          ))}
        </ul>
      )}
      <p>Total: ${cartTotal}</p>
    </div>
  );
};

export default Cart;

