// import React from 'react';
import { useDispatch } from "react-redux";
import { removeItem, deleteItem, addItem } from "../store/cartSlice";
import { Button } from "antd";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrease = () => dispatch(removeItem(item));
  const handleIncrease = () => dispatch(addItem(item));
  const handleDelete = () => dispatch(deleteItem(item));

  return (
    <div className="flex items-center justify-between mb-6">
      {" "}
      <img src={item.image} alt={item.name} className="w-16 h-16" />{" "}
      <h3 className="text-lg m-4">{item.name}</h3>{" "}
      <p className="text-lg m-4">${item.price}</p>{" "}
      <div className="flex items-center">
        {" "}
        <Button onClick={handleDecrease}>-</Button>{" "}

        <span className="mx-2">{item.quantity}</span>{" "}
        <Button className="mx-2" onClick={handleIncrease}>+</Button>{" "}
        <Button className="mx-2" onClick={handleDelete}>Delete</Button>{" "}
      </div>{" "}
      <p className="text-lg m-4 text-green-600">${item.quantity * item.price}</p>{" "}
    </div>
  );
};

export default CartItem;
