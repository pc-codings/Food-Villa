// RestrauntMenu.js

import { useParams } from "react-router-dom";
import { ITEM_IMG_CDN_URL } from "../constants";
import { useEffect, useState } from "react";
import useRestaurant from "../Utils/useRestaurant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const [menuItems, restaurant] = useRestaurant(resId);
  const [showIndex,setShowIndex] = useState(2);

 
  return (
    <div className="text-container">
        <div className="header-img">
        <img src={ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} className="img-1" />
        <div>
        <h1 className="header-1">{restaurant?.name}</h1>
        <div className="acordian-upside">
            <div className="upside-down">
              <p>
                {restaurant?.costForTwoMessage}
              </p>
            </div>
            <div className="upside-down">
            <p>
            {restaurant?.avgRating} ⭐
          </p>
            </div>
            <div className="upside-down">
            <p>
            {restaurant?.totalRatings}+ Ratings
          </p>
            </div>
            <div className="upside-down">
            <p>
            {restaurant?.locality} 
          </p>
            </div>
        </div>
        </div>
        </div>

        
        {
          menuItems.map((menu,index)=>(
            <RestaurantCategory key={menu?.card?.card?.title} 
            data={menu?.card?.card}
            showItem={index == showIndex ? true : false }
            setShowIndex={()=>setShowIndex(index)}
            />
          ))
        }
    </div>
    // <div className="menuData">
    //   <div>
    //     <img src={ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
    //     <h2>{restaurant?.name}</h2>
    //     <h4>{restaurant?.cuisines.join(", ")}</h4>
    //     <h4>{restaurant?.areaName}</h4>
    //     <h4>{restaurant?.avgRating} star</h4>
    //   </div>
    //   <div className="menuDetails">
    //     <h1 className="head1">Menu</h1>
    //     <ul>
    //       {menuItems.map((item) => (
    //         <li className="menu-item" key={item.id}>
    //           <div>
    //             <img src={ITEM_IMG_CDN_URL + item.imageId} alt={item.name} />
    //           </div>
    //           <div className="item-details">
    //             <h3>{item.name}</h3>
    //             <p>{item.description}</p>
    //             <h4>Rupees: {item.price / 100}</h4>
                // <button className="add-to-cart" onClick={() => handleAddItem(item)}>
                //   Add to Cart
                // </button>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default RestrauntMenu;
