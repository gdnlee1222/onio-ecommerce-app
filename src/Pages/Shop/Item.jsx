import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";
import { useParams, useNavigate } from "react-router-dom";
import "./Item.css";

export const Item = () => {
  const navigate = useNavigate(); // This hook lets you programmatically navigate to different pages
  const { data, cartItems, addToCart, removeFromCart } = useContext(ShopContext); // This hook gets data and functions from the ShopContext
  const { productId } = useParams(); // This hook gets the productId from the URL

  return (
    <div className="item-container">
      <div className="card item-card mb-3">
        <div className="row g-0">
          <div className="col-md-4 item-image-container">
            {/* Displays the product image */}
            <img
              src={data[productId - 1].image}
              className="item-image img-fluid rounded-start"
              alt="Product"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* Displays the product title */}
              <h5 className="card-title">{data[productId - 1].title}</h5>
              {/* Displays the product description */}
              <p className="card-text">{data[productId - 1].description}</p>
              {/* Displays the product price */}
              <p className="card-text">
                <small className="text-muted">
                  Price: ${data[productId - 1].price}
                </small>
              </p>
              {/* Displays the product rating */}
              <p className="card-text">
                <small className="text-muted">
                  Rating: {data[productId - 1].rating.rate}/5 (
                  {data[productId - 1].rating.count})
                </small>
              </p>
              {/* Section for adding/removing the product from the cart */}
              <div className="add-to-cart-section">
                <h5>Add to Cart</h5>
                <button
                  className="cart-btn"
                  onClick={() => removeFromCart(productId)}
                >
                  -
                </button>
                <span className="cart-item-count">{cartItems[productId]}</span>
                <button
                  className="cart-btn"
                  onClick={() => addToCart(productId)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button to continue shopping, which navigates back to the shop page */}
      <button onClick={() => navigate("/")} className="continue-shopping-btn">
        Continue shopping
      </button>
    </div>
  );
};
