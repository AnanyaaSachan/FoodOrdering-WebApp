
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  const { name, menu } = resInfo;
    const categories = menu;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>

       {categories.map((category,index) => (<RestaurantCategory key={category.title} data={category}
          showItems = {index === showIndex? true : false}
          setShowIndex={() => 
            setShowIndex(showIndex === index ? null : index)
}
       />
        ))}
        
    </div>
  );
}; 

export default RestaurantMenu;
