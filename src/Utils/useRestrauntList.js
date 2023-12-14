import { useEffect,useState } from "react";
import { swiggy_api_URL } from "../constants";

const useRestrauntList = ()=>{
    const [allResturantList, setAllResturantList] = useState([])
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    useEffect(()=>{
        getRestaurants()
    },[])

    //api call
    async function getRestaurants() {

        try {
          const response = await fetch(swiggy_api_URL);
          const json = await response.json();
    

          async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {
    
              let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

              if (checkData !== undefined) {
                return checkData;
              }
            }
          }
              const resData = await checkJsonData(json);
    

          setAllResturantList(resData);
          setFilteredRestaurants(resData);

        } catch (error) {
          console.log(error);
        }
    }
    return[filteredRestaurants,setFilteredRestaurants,allResturantList]
}

export default useRestrauntList;