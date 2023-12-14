import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data,showItem,setShowIndex})=>{

   const handleClick = ()=>{
        setShowIndex()
   }
    return(
        <div>
            <div className="acordian">
                <div className="acordian-1" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>▼</span>
                </div>
                {showItem && <ItemList items={data.itemCards}/>}
            </div>
            
        </div>

    )
}

export default RestaurantCategory;