
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, menu } = resInfo;
    const categories = menu;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>

       {categories.map((category) => (<RestaurantCategory key={category.title} data={category} />
        ))}
        
    </div>
  );
}; 

export default RestaurantMenu;
