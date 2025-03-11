import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import restaurantList from "../utils/mockData";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = restaurantList.find((r) => r.data.id == resId);
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(false)

  resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  categories = ["Recommended", "Newly Added", "Beverages", "Desserts"];

  return (
    <div className="menu-items">
      <br></br>
      <h1 className="text-2xl text-center font-bold">{restaurant.data.name}</h1>
      <h3 className="text-center">resId = {resId}</h3>
      <br></br>
      {/* Category accordian to come here */}
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category}
          category={category}
          resInfo={resInfo}
          setShowIndex={(Index) => setShowIndex(Index)}
          showItems={showIndex==index?true:false}
          // showItems = {showItems}
          // setShowItems={(v) => setShowItems(v)}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
