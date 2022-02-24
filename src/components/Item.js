import React, { useState } from "react";

function Item({ name, category }) {
  const [isNotInCart, setItemInCart] = useState(true); 

  function handleAddToCart() {
    setItemInCart(!isNotInCart)
  }

  return (
    <li className= {isNotInCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => handleAddToCart()}>{isNotInCart ? "Add to Cart": "Remove From Cart" }</button>
    </li>
  );
}

export default Item;
