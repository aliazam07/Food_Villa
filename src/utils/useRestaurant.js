import { useState, useEffect } from "react";

const useRestaurant = (resId)=>{
    const[restaurant, setRestauraunt] = useState(null);

    //Get data from API
    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json?.data?.cards[0]?.card?.card?.info);
        setRestauraunt(json?.data?.cards[0]?.card?.card?.info);
      }

      //return Restaurant Data
      return restaurant;
}

export default useRestaurant;