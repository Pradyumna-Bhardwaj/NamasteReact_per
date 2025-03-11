import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId)=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{fetchMenu();},[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API);
        const json = await data.json()
        // console.log(json)
        setResInfo(json)
      };

    return resInfo;
};

export default useRestaurantMenu;