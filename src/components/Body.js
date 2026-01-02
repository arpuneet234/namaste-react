import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return filterData;
}
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
    );

    console.log("hello");

    const jsonData = await data.json();

    let pathToCards =
      jsonData.data.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      jsonData.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  console.log("render");

  // if (allRestaurants.length  ===0) return null;
  // if (!filteredRestaurants.length) return <h1>NO SUCH Restaurant FOUND !! </h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          console.log(restaurant?.info?.id);
          let fakeid = Number(restaurant?.info?.id) % 10;
          return (
            <Link key={restaurant.info?.id} to={"/restaurant/" + fakeid}>
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
