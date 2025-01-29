import { CDN_LINK } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;                            
  const {                                               // props = {
    cloudinaryImageId,                                  //    resData: {
    name,                                               //        data: {
    cuisines,                                           //           name: "Restaurant Name",
    area,                                               //           avgRating: "4.5",
    lastMileTravelString,                               //           maxDeliveryTime: "30 mins",
    costForTwoString,                                   //           cloudinaryImageId: "image_id",
    avgRating,                                          //           };};};
  } = resData?.data;                                    

  return (
    <div className="card">
      <img src={ CDN_LINK + cloudinaryImageId } alt="restaurant image"></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <span>
        <h4>
          <i class="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
