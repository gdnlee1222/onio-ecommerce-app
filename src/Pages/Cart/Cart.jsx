import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';
import { CartItem } from "./CartItem";
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

export const Cart = () => {
  // useContext hook to access the shop context
  const { cartItems, data, totalAmount } = useContext(ShopContext);

  // useNavigate hook for navigation
  const navigate = useNavigate();

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart-items'>
         {/* The map() method is used to create a new array by applying a function to each element of the original array. */}
        {data.map((item) => {
          if (cartItems[item.id] !== 0) {
            // For each item in the data array, we return a CartItem component.
            // The key prop is used to identify each item uniquely, like a label on a folder.
            return <CartItem key={item.id} Data={item} />;
          }
        })}
      </div>
      {totalAmount() > 0 ? (
        <div className="cart-bottom">
          <div className="subtotal">
          {/* // The Math.round() function is used to round a number to the nearest integer. */}
            <h4>Subtotal Amount: $ {Math.round(totalAmount() * 100) / 100}</h4>
          </div>
          <div className="cart-buttons">
            <button onClick={() => navigate("/")} className="custom-btn">Continue shopping</button>
            <button className="custom-btn mx-5">Checkout</button>
          </div>
        </div>
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}
    </div>
  );
};
