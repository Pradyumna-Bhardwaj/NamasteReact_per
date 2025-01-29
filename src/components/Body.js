import RestaurantCard from "./restaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
      })}
    </div>
  );
};

export default Body;
