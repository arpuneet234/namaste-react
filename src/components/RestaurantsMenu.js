import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch("https://dummyjson.com/products/" + id);
    console.log(data);
    const json = await data.json();
    console.log(json);
    setRestaurant(json);
  }

  console.log(restaurant);

  return (
    <>
      <h1>Restaurant ID : {id}</h1>
      <h2>Restaurant Menu</h2>
      <h2>{restaurant.title}</h2>
      <img src={restaurant.thumbnail}></img>
      <h2>{restaurant.tags?.join(", ")}</h2>
    </>
  );
};

export default RestaurantMenu;
