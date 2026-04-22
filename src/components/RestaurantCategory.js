import { useState } from "react";
import ItemList from "./itemList";



const RestaurantCategory = ({ data }) => {

 const [showItems, setShowItems] =useState(false);

 const handleClick = () => {
    setShowItems(!showItems)
 };

  return (
    <div className="w-6/12 mx-auto my-6 bg-white shadow-lg rounded-xl overflow-hidden">
      
      {/* Header */}
      <div 
         className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100 transition"
        onClick={handleClick}
     >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl">▼</span>
      </div>

      {/* Body */}
      <div className="px-6 pb-4">
        {showItems && <ItemList items={data.itemCards} />}
      </div>

    </div>
  );
};


export default RestaurantCategory;