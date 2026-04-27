import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";


const RestaurantCard = ({ resData }) => {

  const {loggedInUser} = useContext(UserContext);

  if (!resData) return null;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    promoted
  } = resData;

  return (
    <div data-testid = "resCard" className="res-card p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">

      <img
        className="res-logo w-full h-40 object-cover rounded-md"
        src={
          cloudinaryImageId?.startsWith("http")
            ? cloudinaryImageId
            : CDN_URL + cloudinaryImageId
        }
        onError={(e) => {
          e.target.src =
            "https://tse2.mm.bing.net/th/id/OIP.y3mLETTSoc9spj_iCWl2LwHaEK?pid=Api&P=0&h=180";
        }}
      />

      <h3 className="font-bold text-lg mt-2">{name}</h3>

      <h4 className="text-sm text-gray-600">
        {typeof cuisines === "string"
          ? cuisines
          : cuisines?.join(", ")}
      </h4>

      <h4 className="text-sm font-semibold">
        ⭐ {avgRating}
      </h4>

      <h4 className="text-sm">{costForTwo}</h4>

      <h4 className="text-sm text-gray-500">
        {deliveryTime} mins
      </h4>
       
        <h4 className="text-sm text-gray-500">
        {loggedInUser}
        </h4>
    </div>
  );
};

 export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="relative"> 
        <label className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
 };







export default RestaurantCard;