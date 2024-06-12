import React, { useContext, useEffect } from "react";
import { Product } from "./Product";
import { ShopContext } from "../../Context/shop-context";
import "./shop.css";

export const Shop = () => {
  const { data } = useContext(ShopContext);

  return (
    <div className="shop-container">
      <div className="shop-content">
        {data && data.length === 0 ? (
          <p>No products found.</p>
        ) : (
          data.map((item) => (
            <div key={item.id} className="product-item">
              <Product Data={item} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
