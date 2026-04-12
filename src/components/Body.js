import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";


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


  return listOfRestaurants.length === 0 ? (
   <Shimmer />  
  ) : (                                     //ternary operator
  <div className="Body">
    <div className="filter">
      <div className="search">
        <input type="text" className="search-box"
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
        />
        <button
         className="search-btn"
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
      <button
        className="filer-btn"
        onClick={()=> {
          const filteredList = listOfRestaurants.filter(
           (res) => res?.info?.avgRating > 4.5
          );
          setlistOfRestaurants(filteredList);
        }}
      >
       Top Rated Restaurant  
      </button>
    </div>
    <div className="res-container">
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