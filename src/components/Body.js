import RestaurantCard from "./restaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  {
    let resList = []
    if(resList.length===0){
      return <h1>loading...</h1>;
    }
  }
  const [resList, setResList] = useState(restaurantList);
  
  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json()
  //   console.log(json)
  // };

  // useEffect(()=>{
  //   fetchData();
  // }, []);


  return (
    <div className="restaurant-list">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = restaurantList.filter(
              (res) => res.data.avgRating >= 4
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
