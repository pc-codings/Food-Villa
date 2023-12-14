// Cart.js

import React from 'react';
import { INC_CDN_URL } from "../constants"
import { removeItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FoodItem = ({ name, description, imageId, price }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
      dispatch(removeItem());
      toast.success("Item Removed ", {
        position: toast.POSITION.TOP_CENTER
      });
  };
  return (
    <div className='cart-item'>
      <img src={INC_CDN_URL + imageId} alt={name} />
      <div className='cart-item-details'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price / 100}</h4>
        <button className="remove-cart" onClick={() => handleRemoveItem()}>
          Remove 
        </button>
        <ToastContainer/>
      </div>
    </div>
  );
};


export default FoodItem;
