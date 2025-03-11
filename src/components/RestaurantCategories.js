import ItemCard from "./itemCard";

const RestaurantCategories = (props) => {

  handleOnClick = () =>{
    !props.showItems?props.setShowIndex(props.index):props.setShowIndex(null)
    // props.setShowItems(!props.setShowItems)
  }
  // if props.showItems was- 
  // a) initially false then onClick uses its opposite to set correct index in showIndex ->
  //    re-renddering with showIndex==index in ResMenu.js -> 
  //    showItems set to true in ResMenu.js -> 
  //    line 24 runs fine
  // a) initially True then onClick uses its opposite to set null in showIndex ->
  //    re-renddering with showIndex==null in ResMenu.js -> 
  //    showItems set to false in ResMenu.js -> 
  //    line 24 doesn't run 

  return (
    <div className="w-6/12 mx-auto bg-gray-100 p-2 my-4 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleOnClick}>
        <span>{props.category}</span>
        <span>🔽</span>
      </div>
      {props.showItems && <ItemCard resInfo={props.resInfo} />}
    </div>
  );
};

export default RestaurantCategories;
