import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_LIST, REST_MENU_LIST_IMG } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();

  const [showmenui, setShowmenui] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(REST_MENU_LIST + resId);
      const json = await data.json();
      // console.log(json.data);

      setResMenu(json.data);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const restaurantInfo = resMenu?.cards?.[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return <div>Restaurant not found</div>;
  }

  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } =
    restaurantInfo;

  const { itemCards } =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  // console.log(itemCards);
  // console.log(resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="max-w-7xl mx-auto px-4 flex justify-between">
      <div className="resMenu">
        <div className="restaurent_name">{name}</div>
        <div className="restaurent_rating">{avgRating} ⭐</div>
        <div className="restaurent_costfortwo">{costForTwo}</div>
        <div className="menu_lists">
          <img
            src={REST_MENU_LIST_IMG + cloudinaryImageId}
            alt={name}
            className="restaurant-image"
          />
        </div>
        <div className="cuisines">{cuisines.join(", ")}</div>
      </div>

      <div className="menuList">
        {categories.map((e, index) => (
          <RestaurantCategory
            key={e.card.card.title}
            data={e?.card?.card}
            showmenu={index === showmenui ? true : false}
            setShowmenui={() => setShowmenui(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsMenu;
