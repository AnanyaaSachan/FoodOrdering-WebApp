import { useState,useEffect } from "react";


const RestaurantMenu = ()=>{
    useEffect(()=>{
       fetchMenu();
    },[]);
     
   const fetchMenu = async() => {
     const data = await fetch(
         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.421623627305543&lng=77.52531832337559&restaurantId=45862&catalog_qa=undefined&submitAction=ENTER"
     );
     const json = await data.json();

     console.log(json);
   };

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