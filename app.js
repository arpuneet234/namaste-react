import React from "react";
import ReactDOM from "react-dom/client";

const title = (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo.png"
    ></img>
  </a>
);

const HeaderComponent = () => {
  return (
    <div className="header">
      {title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const burgerKing = {
  name: "Burger King",
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ee1fdf16-ea5f-4a44-9e58-7b3a9dee2618_8614.jpg",
  cusine: ["burgers", "American"],
  rating: "4.2 ",
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      id: 1,
      name: "Burger Junction",
      cuisine: ["Fast Food", "Burgers"],
      rating: 4.3,
      deliveryTime: "30 mins",
      priceForTwo: 250,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23f97316'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Burger Junction</text></svg>",
      location: "Rajouri Garden, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 2,
      name: "Pizza Palace",
      cuisine: ["Italian", "Pizza"],
      rating: 4.1,
      deliveryTime: "25 mins",
      priceForTwo: 400,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23dc2626'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Pizza Palace</text></svg>",
      location: "Janakpuri, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 3,
      name: "Delhi Darbar",
      cuisine: ["North Indian", "Mughlai"],
      rating: 4.5,
      deliveryTime: "35 mins",
      priceForTwo: 500,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%2316a34a'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Delhi Darbar</text></svg>",
      location: "Karol Bagh, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 4,
      name: "Green Leaf Cafe",
      cuisine: ["Healthy", "Salads"],
      rating: 4.0,
      deliveryTime: "20 mins",
      priceForTwo: 300,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%2322c55e'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Green Leaf Cafe</text></svg>",
      location: "Dwarka, Delhi",
      isVeg: true,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 5,
      name: "South Spice",
      cuisine: ["South Indian"],
      rating: 4.6,
      deliveryTime: "30 mins",
      priceForTwo: 350,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%230ea5e9'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>South Spice</text></svg>",
      location: "Lajpat Nagar, Delhi",
      isVeg: true,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 6,
      name: "Biryani House",
      cuisine: ["Biryani", "Hyderabadi"],
      rating: 4.4,
      deliveryTime: "40 mins",
      priceForTwo: 450,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%237c2d12'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Biryani House</text></svg>",
      location: "Saket, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 7,
      name: "Chinese Wok",
      cuisine: ["Chinese", "Asian"],
      rating: 4.2,
      deliveryTime: "28 mins",
      priceForTwo: 300,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%236b21a8'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Chinese Wok</text></svg>",
      location: "Rohini, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 8,
      name: "Chaat Corner",
      cuisine: ["Street Food", "Chaat"],
      rating: 4.0,
      deliveryTime: "18 mins",
      priceForTwo: 150,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23ca8a04'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Chaat Corner</text></svg>",
      location: "Chandni Chowk, Delhi",
      isVeg: true,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 9,
      name: "Cafe Brew Beans",
      cuisine: ["Cafe", "Beverages"],
      rating: 4.3,
      deliveryTime: "22 mins",
      priceForTwo: 350,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%230f766e'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Cafe Brew Beans</text></svg>",
      location: "Connaught Place, Delhi",
      isVeg: true,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 10,
      name: "Rolls & Wraps",
      cuisine: ["Rolls", "Fast Food"],
      rating: 3.9,
      deliveryTime: "26 mins",
      priceForTwo: 200,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%234b5563'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Rolls & Wraps</text></svg>",
      location: "Pitampura, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 11,
      name: "Punjab Grill",
      cuisine: ["Punjabi", "North Indian"],
      rating: 4.5,
      deliveryTime: "32 mins",
      priceForTwo: 550,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%2392400e'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Punjab Grill</text></svg>",
      location: "Vasant Kunj, Delhi",
      isVeg: false,
    },
  },
  {
    type: "restaurant",
    data: {
      id: 12,
      name: "Sweet Tooth",
      cuisine: ["Desserts", "Bakery"],
      rating: 4.4,
      deliveryTime: "15 mins",
      priceForTwo: 180,
      image:
        "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23ec4899'/><text x='50%' y='50%' font-size='36' fill='white' text-anchor='middle' dominant-baseline='middle'>Sweet Tooth</text></svg>",
      location: "Noida Sector 18",
      isVeg: true,
    },
  },
];

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

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
