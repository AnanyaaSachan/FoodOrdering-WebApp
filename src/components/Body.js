import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_API } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import User from "./User";

const Body = () => {

 const [listOfRestaurants, setListOfRestaurants] = useState([]);
 const [filteredRestaurant, setFilteredRestaurant] = useState([]);

 const [searchText , setSearchText] = useState("");

 const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


 console.log(listOfRestaurants);
 useEffect(()=> {
     fetchData();
 }, []);

const fetchData = async () => {
  try {
    const data = await fetch(RESTAURANT_LIST_API);
    const json = await data.json();

    setListOfRestaurants(json);
    setFilteredRestaurant(json);

  } catch (error) {
    console.error("Error:", error);
  }
};

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return(
       <h1> 
        Looks like you are offline !! Please CHECK your connection....
       </h1> 
    )
 
    const { loggedInUser, setUserName } = useContext(UserContext);

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
             res.name.toLowerCase().includes(searchText.toLowerCase())
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
           (res) => res.avgRating > 4.5
          );
          setFilteredRestaurant(filteredList);
        }}
      >
       Top Rated Restaurant  
      </button>
      </div>
      <div >
        <label>Username : </label>
        <input className="border border-black" 
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)} />
      </div>
      
    </div>
     <div className="res-container grid grid-cols-6 gap-6 p-6">
       {filteredRestaurant.map((restaurant) => {

               console.log("ID ", restaurant?.id);

           return (
                 <Link
                 key={restaurant?.id}
                 to={"/restaurant/" + restaurant?.id}
                >
                 {
                  restaurant?.promoted ? (
                  <RestaurantCardPromoted resData={restaurant} /> ) : (
                  <RestaurantCard resData={restaurant} /> )
                 }
                </Link>
             );
           })}
</div>
    
  </div> 
  );
};
export default Body;