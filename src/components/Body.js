import { burgerKing } from "../constants"
import RestrauntCard from "./RestrauntCard"
import { useState,useEffect,useContext } from "react"
import { swiggy_api_URL } from "../constants";
import Shimmer from "./ShimmerUI.js";
import { Link } from "react-router-dom";
import useRestrauntList from "../Utils/useRestrauntList.js";
import er from '/404Error.jpg';
import userContext from "../Utils/userContext.js";


function HandleSearch(searchItem,resturantList){
    const data = resturantList.filter((resturant)=>
        resturant?.info?.name.toLowerCase().includes(searchItem.toLowerCase())
    )
    return data
}


const Body = ()=>{

    const [searchItem,setSearchItem] = useState("")
    const [filteredRestaurants,setFilteredRestaurants,allResturantList] = useRestrauntList()
    const [error,setError] = useState('')
    const {user,setUser} = useContext(userContext)

    function searchData(searchText,restraunt){
      if(searchText !== ''){
        const data = HandleSearch(searchText,restraunt)
        setFilteredRestaurants(data)
        setError('')
        if(data.length === 0){
          setError("No Restaurants")
        }
      }else{
        setFilteredRestaurants(allResturantList)
      }
    }

    return(
        <>
        <div className="search">
            <input
            className="search-input"
            placeholder="KFC"
            type="text"
            value={searchItem}
            onChange={(e)=>{
                setSearchItem(e.target.value)
                searchData(e.target.value,allResturantList)
            }}
            />

            <button className="btn" 
            onClick={()=>{
                const filterData = HandleSearch(searchItem,allResturantList)
                setFilteredRestaurants(filterData);
              }}
            >Search
            </button>
            {/* <input value={user.name} onChange={e=>{
              setUser({
                name: e.target.value
              })
            }}></input> */}
        </div>
        
        {error && <div className="error-container">{error}
        <img src={er} />
        </div>}
        
        {allResturantList?.length === 0 ? 
        (<Shimmer/>):
        (        
        <div className='restraunt-list'>
            
          {
              filteredRestaurants.map((item)=>{
                  return(
                    <Link to={'/restraunt/'+item?.info?.id} key={item?.info?.id}>
                      <RestrauntCard  {...item?.info}/>
                    </Link>
                      
                  )
                }
              )
              
          }
        
        </div>
      )
    }

        </>
    )
}

export default Body;