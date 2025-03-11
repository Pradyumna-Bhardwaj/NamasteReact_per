import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import restaurantList from "../utils/mockData"; //og restaurant list from API
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // declaring state variable first -> fetching dtata started -> till no data came render Shimmer UI
  const [resList, setResList] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRes, setFilteredRes] = useState(restaurantList);
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
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

  const {loggedInUser, setUserName} = useContext(UserContext)
  const inputRef = useRef(null);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <div>
        <h1>OOPS..Seems like you're offline</h1>
      </div>
    );
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="p-4 flex items-center">
        <div className="flex gap-1">
          <input
            className="border border-solid border-black p-2 py-1"
            placeholder="Enter Query"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-blue-400"
            onClick={() => {
              const searchList = restaurantList.filter((res) =>
                res?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase())
              );
              setFilteredRes(searchList);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-4">
          <button
            className="px-4 py-1 bg-green-400 rounded-lg"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res?.data?.avgRating >= 4
              );
              setFilteredRes(filteredList); //resList is updated here to filtered list and virtual DOM is changed
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="flex gap-1">
          <input
            className="py-1 border border-solid border-black p-2"
            placeholder="Enter Username"
            ref={inputRef}
          />
          <button
            className="px-4 py-1 bg-blue-400"
            onClick={() => {
              setUserName(inputRef.current.value)
            }}
          >
            Set
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => {
          return (
            <div className="">
              <Link
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant.data.id}
              >
                {restaurant.data.promoted ? (
                  <RestaurantCardPromoted
                    key={restaurant.data.id}
                    resData={restaurant}
                  />
                ) : (
                  <RestaurantCard
                    key={restaurant.data.id}
                    resData={restaurant}
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
