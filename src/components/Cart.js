import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const store = useSelector((store) => store);
  return (
    <div>
      <h1>Cart - {store.cart.items}</h1>
    </div>
  );
};

export default Cart;
