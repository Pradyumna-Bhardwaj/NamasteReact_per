import RestaurantCard from "./restaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restaurantList);
  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = restaurantList.filter(
              (res) => res.data.avgRating > 4
            );
            setResList(filteredList); //resList is updated here to filtered list and virtual DOM is changed
          }}
        >
          Top rated restaurant
        </button>
      </div>
      {resList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
      })}
    </div>
  );
};

export default Body;
