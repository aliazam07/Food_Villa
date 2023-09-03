
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  // how to read a dynamic URL params
  const { resId } = useParams();
  // Use proper names
const restaurant = useRestaurant(resId);
const dispatch = useDispatch();
const handleAddItem = ()=>{
  dispatch(addItem("Grapes"));
}

 

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwo}</h3>
      </div>
      <div>
        <button className="p-2 m-5 bg-green-200" onClick={()=> handleAddItem()}>Add Item</button>
      </div>
      
    </div>
  );
};

export default RestaurantMenu;