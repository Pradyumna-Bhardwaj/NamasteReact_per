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
    <div className="p-4 m-4 w-48 bg-gray-300">
      <img className="w-38 h-36" src={ CDN_LINK + cloudinaryImageId } alt="restaurant image"></img>
      <h3 className="font-bold pt-2 text-l">{name}</h3>
      <h4 className="text-sm pt-1">{cuisines.join(", ")}</h4>
      <h4 className="text-sm pt-1">{area}</h4>
      <span>
        <h4 className="text-sm pt-1">
          <i className="fa-solid fa-star pr-1"></i>
          {avgRating}
        </h4>
        <h4 className="text-sm pt-1">{lastMileTravelString}</h4>
        <h4 className="text-sm pt-1">{costForTwoString}</h4>
      </span>
    </div>
  );
};

export const withPromotedLable = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-gray-700 text-white m-2 p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
