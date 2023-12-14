import { useEffect, useState } from "react"
import { MENU_ITEM_TYPE_KEY,ITEM_IMG_CDN_URL,swiggy_menu_api_URL } from "../constants"


const useRestaurant = (resId)=>{
    const [restaurant,setRestaurant] = useState(null)
    const [menuItems,setMenuItems] = useState([]);

    useEffect(()=>{
        getRestaurant()
    },[])

    async function getRestaurant() {
        try{
            const data = await fetch(swiggy_menu_api_URL+resId)
            const json = await data.json()
            setRestaurant(json.data?.cards[0]?.card?.card?.info);

            const menuItemsData = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

            // const uniqueMenuItems = [];
            // menuItemsData.forEach((item) => {
            // if (!uniqueMenuItems.find(x => x.id === item.id)) {
            // uniqueMenuItems.push(item);
            // }
            // })
            setMenuItems(menuItemsData);
            let category = json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
           

        }
        catch(err){
            console.log(err)
        }

    }
    return[menuItems, restaurant]

}

export default useRestaurant;