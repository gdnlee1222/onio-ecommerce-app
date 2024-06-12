import React, { createContext, useState, useEffect } from "react";

// Create a context with default value null
export const ShopContext = createContext(null);

// Function to initialize default cart items with 0 quantity
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 21; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Function to initialize default wishlist items with false
const getDefaultWish = () => {
  let Wlist = {};
  for (let i = 1; i < 21; i++) {
    Wlist[i] = false;
  }
  return Wlist;
};

// ShopContextProvider component to provide context values to its children
export const ShopContextProvider = (props) => {
  // useState hook to manage cartItems state, initialized with getDefaultCart function
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // useState hook to manage wish state, initialized with getDefaultWish function
  const [wish, setWish] = useState(getDefaultWish());

  // useState hook to manage data state
  const [data, setData] = useState([]);

  const API_ENDPOINT = `https://fakestoreapi.com/products/`;

  // More than 1 endpoint
  // `${API_ENDPOINT}/category/${ category }`

  // useEffect hook to fetch data from an API when the component mounts
  useEffect(() => {
    fetch( API_ENDPOINT )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Function to calculate total amount in the cart
  // Complete the name, totalAmount
  const totalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount; // this one
  };

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to toggle an item in the wishlist
  const addToWishList = (itemId) => {
    setWish((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const updateResults = (newResults) => {
    setData(newResults)
  } 

  // Context value to be provided to the consuming components
  const contextValue = { cartItems, addToCart, removeFromCart, data, totalAmount, addToWishList, wish, updateResults };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
