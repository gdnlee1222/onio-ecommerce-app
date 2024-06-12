import React from 'react'

export const ItemData = (props) => {
    const {id,title,price,image,description} = props.Data;
  return (
    <div>
        <img src={image}/>
        <h3>{title}</h3>
        <h5>{price}</h5>
        <p>{description}</p>
    </div>
  )
}