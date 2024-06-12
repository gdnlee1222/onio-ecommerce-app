import React from "react";
import { useLocation } from 'react-router-dom';

export const description = () => {
  const location = useLocation();
   
  const image = location.state.image;
  const title = location.state.title;
  const price = location.state.price;
  const description = location.state.description;
  
  return (
    <div>
        <img src={image}/>
        <p>{title}</p>
        <p>{price}</p>
        <p>{description}</p>
    </div>
  )
}