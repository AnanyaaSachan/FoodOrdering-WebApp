import { CDN_URL } from "../utils/constant"
import { Link } from "react-router-dom";

const RestaurantCard = (props)=>{
  const { resData } = props;

  const info = resData?.info;

if (!info) return null;

const {
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla
} = info;
  return(
    <div className="res-card p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <img className="res-logo w-full h-40 object-cover rounded-md" src={ CDN_URL +
      cloudinaryImageId}
     />
      <h3  className="font-bold text-lg mt-2" >{name}</h3>
      <h4 className="text-sm text-gray-600">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-semibold">{avgRating} ⭐</h4>
      <h4 className="text-sm">{costForTwo}</h4>
      <h4 className="text-sm text-gray-500">{sla.deliveryTime} mins</h4>
    </div>
    
  )
}
export default RestaurantCard;