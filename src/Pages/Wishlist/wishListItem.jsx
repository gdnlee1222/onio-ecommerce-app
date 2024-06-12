import React, { useContext } from 'react';
import { ShopContext } from '../../Context/shop-context';
import './WishListItem.css';

// Define and export the WishListItem component
export const WishListItem = (props) => {
    // Destructure properties from the passed-in Data prop
    const { id, title, price, image, description } = props.Data;
    // Use the useContext hook to access addToWishList and addToCart functions from ShopContext
    const { addToWishList, addToCart } = useContext(ShopContext);

    return (
        <div className="wish-list-item-container">
            <div className="wish-list-item-content">
                <div className="d-flex align-items-center my-4 shadow p-3 mb-5 bg-body rounded">
                    <div className="flex-shrink-0">
                        <img src={image} height="100px" width="100px" alt="Product" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">${price}</p>
                        <div>
                            <button className="custom-btn remove-btn" onClick={() => addToWishList(id)}>Remove</button>
                            <button className="custom-btn add-to-cart-btn mx-5" onClick={() => addToCart(id)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
