import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const ItemCard = (props) => {
  dispatch = useDispatch();

  const handleAddItem = (meal) => {
    dispatch(addItem(meal));
  };

  return (
    <div>
      {props.resInfo?.meals?.map((meal) => (
        <div key={meal.idMeal} className="border-gray-200 border-b-2 p-2 m-2">
          <div className="flex items-center">
            <img src={meal.strMealThumb} className="w-20" />
            <button
              className="bg-green-500 text-sm p-1 ml-4"
              onClick={()=>{handleAddItem(meal)}}
            >
              + Add
            </button>
          </div>
          <div>
            <span>{meal.strMeal}</span> <br></br>
            <span>{meal.strCategory}</span>
          </div>
          <p className="text-xs">{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
