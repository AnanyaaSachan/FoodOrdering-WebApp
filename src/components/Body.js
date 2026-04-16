import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

 const [listOfRestaurants, setlistOfRestaurants] = useState([]);
 const [filteredRestaurant, setFilteredRestaurant] = useState([]);

 const [searchText , setSearchText] = useState("");

 console.log(listOfRestaurants);
 useEffect(()=> {
     fetchData();
 }, []);

 const fetchData = async () => {
   const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.421623627305543&lng=77.52531832337559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
  
   const json = await data.json();
   
   console.log(json);
     const restaurants =
  json?.data?.cards
    ?.map((c) => c?.card?.card)
    ?.find((c) => c?.gridElements?.infoWithStyle?.restaurants)
    ?.gridElements?.infoWithStyle?.restaurants;

    setlistOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
 };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return(
       <h1> 
        Looks like you are offline !! Please CHECK your connection....
       </h1> 
    )


  return listOfRestaurants.length === 0 ? (
   <Shimmer />  
  ) : (                                     //ternary operator
  <div className="Body">
    <div className="filter flex items-center gap-4 m-4 p-4">
      <div className="search">
        <input type="text" className="border border-black px-4 py-2 rounded-md w-64 h-10"
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
        />
        <button 
         className="px-4 py-2 bg-green-300 rounded-lg"
          onClick={() => {
            const filteredRestaurant  = listOfRestaurants.filter((res) =>
             res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
             setFilteredRestaurant(filteredRestaurant); 
          }}
        >
        Search
        </button>
      </div>
      <div >
        <button 
        className="filer-btn px-4 py-2 bg-green-300 rounded-lg"
        onClick={()=> {
          const filteredList = listOfRestaurants.filter(
           (res) => res?.info?.avgRating > 4.5
          );
          setFilteredRestaurant(filteredList);
        }}
      >
       Top Rated Restaurant  
      </button>
      </div>
      
    </div>
    <div className="res-container grid grid-cols-6 gap-6 p-6">
        {filteredRestaurant
           ?.filter((res) => res?.info)  
           .map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData={restaurant}
     />
  ))} 
    </div>
  </div> 
  );
};
export default Body;