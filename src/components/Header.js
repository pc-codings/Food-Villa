// HeaderComponent.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import fresh from "/Fresh.jpg";
import useOnlineStatus from "../Utils/useOnline";

const Title = () => {
  return (
    <Link to='/'>
      <img
        className='logo'
        src={fresh}
        alt='logo'
      />
    </Link>
  );
};

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnlineStatus();

  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li className='login-button'>
          <div>
      <p> {isOnline ? 'Online 🟢' : 'Offline 🔴'}</p>
    </div>
          </li>
          <li className="button-5">
            <Link to='/'>Home</Link>
          </li>
          <li className="button-5">
            <Link to='/about'>About</Link>
          </li>
          <li className="button-5">
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="button-5">
            <Link to='/cart'>
              <span className='cart-icon'>&#128722;</span> Cart - {cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
