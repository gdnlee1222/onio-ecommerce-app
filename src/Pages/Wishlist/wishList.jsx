import React, { useContext } from 'react'
import {ShopContext} from '../../Context/shop-context';
import { WishListItem } from './wishListItem';
import './wishList.css';

 export const Wishlist = () => {
   // Use the useContext hook to access the ShopContext
  const{ wish,data } =useContext(ShopContext)

  return (
    <div className='container'>
      <div>
        <h1>Your Wishist Items</h1>
      </div>
      <div>
        {/* Map over the data array to render each item */}
      {data.map((item) => {
        // Check if the item's id is present in the wish object and not set to false
           if (wish[item.id] !== false){
            // Render the WishListItem component for each valid item
            return <WishListItem Data = {item}/>
           } 
          })}
      </div>
    </div>
  )
}