import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';
import './CartItem.css';

// The CartItem component receives a props object, which contains data passed from its parent component.
export const CartItem = (props) => {
  // We're destructuring the props object to extract specific properties from the Data object.
  const { id, title, price, image, description } = props.Data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);


  // The component returns a JSX element that displays the cart item information.
return (
    <div className="cart-item">
      <div className="cart-item-content">
      {/* We're using the image property from the props.Data object to display the cart item image. */}
        <div className="cart-item-image">
        {/* // We're using the title and price properties from the props.Data object to display the cart item details. */}
          <img src={image} alt={title} />
        </div>
        <div className="cart-item-details">
          <h5>{title}</h5>
          <p>${price}</p>
          <div className="cart-item-controls">
          {/* // We're using the removeFromCart function from the ShopContext to remove the item from the cart. */}
            <button className="cart-item-btn" onClick={() => removeFromCart(id)}>-</button>
            {/* // We're displaying the current quantity of the item in the cart using the cartItems object from the ShopContext. */}
            <span>{cartItems[id]}</span>
            {/* // We're using the addToCart function from the ShopContext to add the item to the cart. */}
            <button className="cart-item-btn" onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
