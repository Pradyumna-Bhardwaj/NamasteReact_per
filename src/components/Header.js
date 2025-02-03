import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Title = () => (
  <a href="/">
    <img className="logo" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
);
const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleOnCLick = () => {
    setisLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
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

            {
              <button
                className={isLoggedIn ? "logout-btn" : "login-btn"}
                onClick={handleOnCLick}
              >
                {isLoggedIn ? "Logout" : "Login"}
              </button>
            }

            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
