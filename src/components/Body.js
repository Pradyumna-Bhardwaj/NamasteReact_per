import RestaurantCard from "./restaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  // declaring state variable first -> fetching dtata started -> till no data came render Shimmer UI
  const [resList, setResList] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json()
  //   console.log(json)
  //   setResList(json?.data?.card[2]) //complete optional chaining
  // };

  // useEffect(()=>{
  //   fetchData();
  // }, []);

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Enter Query"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchList = restaurantList.filter(
              (res) => res?.data?.name?.includes(searchTxt)
            );
            
            setResList(searchList);
          }}
        >
          Search
        </button>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              filteredList = restaurantList.filter(
                (res) => res?.data?.avgRating >= 4
              );
              setResList(filteredList); //resList is updated here to filtered list and virtual DOM is changed
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="restaurant-list">
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
