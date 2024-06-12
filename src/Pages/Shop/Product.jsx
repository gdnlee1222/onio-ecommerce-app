import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/shop-context";
import "./Product.css"; // Import custom CSS for styling

export const Product = (props) => {
  // Destructure props to get product data
  const { id, title, price, image, description, rating } = props.Data;

  // useContext hook to access the shop context
  const { addToCart, cartItems, addToWishList, wish } = useContext(ShopContext);

  // Get the quantity of this product in the cart and its wishlist status
  const cartItemAmount = cartItems[id];
  const wishItem = wish[id];

  return (
    <div className="product-container">
      <div className="card product-card shadow-sm mb-3">
        {/* Product Image */}
        <img src={image} className="card-img-top product-image" alt="Product" />

        <div className="card-body">
          {/* Product Title */}
          <h5 className="card-title">{title}</h5>

          {/* Product Price */}
          <p>${price}</p>

          {/* Link to Product Details */}
          <div>
            <Link to={`/product/${id}`} className="product-link">Product details</Link>
          </div>
          
          {/* Add to Cart Button */}
          <button
            className="custom-btn add-to-cart-btn"
            onClick={() => addToCart(id)}
          >
            Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>

          {/* Add to Wishlist Button */}
          <button
            className={`custom-btn wishlist-btn ${wishItem ? "remove-btn" : ""}`}
            onClick={() => addToWishList(id)}
          >
            {wishItem ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};
