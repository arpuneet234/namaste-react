import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  sla,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.deliveryTime} mins to Deliver</h4>
    </div>
  );
};

export default RestaurantCard;
