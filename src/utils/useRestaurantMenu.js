
import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    const data = await fetch(MENU_API + "/" + resId) ;
      console.log("FINAL URL ", MENU_API + "/" + resId);
    const json = await data.json();
     console.log("API RESPONSE 👉", json);
      setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
 
