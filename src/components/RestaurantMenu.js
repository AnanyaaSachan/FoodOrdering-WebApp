
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, menu } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>

      {menu.map((category) => (
        <div key={category.title}>
          <h2>{category.title}</h2>

          {category.itemCards.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>₹{item.price / 100}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
