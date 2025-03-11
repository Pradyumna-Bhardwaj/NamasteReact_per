import { useSelector, useDispatch } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

    dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

  return (
    <div>
        <div className="text-center m-2 p-2">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-black text-white rounded-lg p-1 m-1" onClick={handleClearCart}>Clear Cart</button>
        </div>
      {cartItems.map((meal) => (
        <div key={meal.idMeal} className="border-gray-200 border-b-2 p-4 w-6/12 m-auto">
          <div className="flex items-center">
            <img src={meal.strMealThumb} className="w-20" />
            <span>{meal.strMeal}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
