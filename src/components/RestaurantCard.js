const RestaurantCard = ({ name, image, cuisine, rating, deliveryTime }) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>{name}</h2>
      <h3>{cuisine.join(",")}</h3>
      <h4>{rating}stars</h4>
      <h4>{deliveryTime} To Deliver</h4>
    </div>
  );
};

export default RestaurantCard;
