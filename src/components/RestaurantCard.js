import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props)=>{
  const { resData } = props;

  const {
    cloudinaryImageId,
     name, 
     avgRating,
     cuisines, 
     costForTwo,
     deliveryTime
    } = resData?.data;
  return(
    <div className="res-card">
      <img className="res-logo" src={ CDN_URL +
      cloudinaryImageId}
     />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>Rs.{costForTwo/100} FOR TWO</h4>
      <h4>{deliveryTime}mins</h4>
    </div>
    
  )
}


export default RestaurantCard;