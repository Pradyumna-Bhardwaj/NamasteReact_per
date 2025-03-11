import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <a href="/">
    <img className="w-20" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleOnCLick = () => {
    setisLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-yellow-400 shadow-xl">
      <Title />
      <div className="flex items-center">
        <ul className="flex p-4">
          <li className="px-4 font-bold text-xl">
            <Link to="/" replace>
              Home
            </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">
              <span className="font-bold text-xl pr-1">Cart</span>
              <i className="fa-solid fa-cart-shopping pr-1"></i>
              {cartItems.length}
            </Link>
          </li>
          <li className="pl-2 pr-4 font-bold text-xl">{loggedInUser}</li>
          <li>
            {/* {isLoggedIn === false ? (
              <button className="login-btn" onClick={handleOnCLick}>
                Login
              </button>
            ) : (
              <button className="logout-btn" onClick={handleOnCLick}>
                Logout
              </button>
            )} */}

            <button
              className={
                isLoggedIn
                  ? "bg-red-500 rounded-xl pb-1 px-4 font-bold text-xl"
                  : "bg-green-500 rounded-xl pb-1 px-4 font-bold text-xl"
              }
              onClick={handleOnCLick}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
