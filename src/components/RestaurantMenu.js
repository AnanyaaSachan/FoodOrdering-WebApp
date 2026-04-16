import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = ()=>{
     const {resId} = useParams();

     const resInfo = useRestaurantMenu(resId);

     if(resInfo === null) return <Shimmer />;

     const { name, cuisines, costForTwoMessage} = 
          resInfo?.cards[0]?.card?.card?.info;

     const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.card;
     
     console.log(itemCards);

    return(
        <div> 
            <h1>Name of the restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>biryani</li>
                <li>burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;