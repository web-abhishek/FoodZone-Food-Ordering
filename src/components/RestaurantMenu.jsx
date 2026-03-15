import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_LIST, REST_MENU_LIST_IMG } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { Star, MapPin, Flame } from "lucide-react";


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
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-500">
        Restaurant not found
      </div>
    );
  }

  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } = restaurantInfo;
console.log(resMenu);
  const categories = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (e) => e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <div className="flex items-center gap-4 mt-2 flex-wrap">
            <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
              <Star className="w-4 h-4 fill-green-600 text-green-600" />
              <span className="font-semibold text-green-700">{avgRating}</span>
            </div>
            <span className="text-gray-600 text-sm">{costForTwo}</span>
            <span className="text-gray-600 text-sm flex items-center gap-1">
              <Flame className="w-4 h-4 text-red-500" />
              {cuisines.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Restaurant Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <img
                src={REST_MENU_LIST_IMG + cloudinaryImageId}
                alt={name}
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="mt-4 bg-white p-4 rounded-xl shadow">
                <p className="text-sm text-gray-600 font-medium mb-2">Cuisines</p>
                <div className="flex flex-wrap gap-2">
                  {cuisines.map((cuisine) => (
                    <span key={cuisine} className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
            <div className="space-y-4">
              {categories && categories.length > 0 ? (
                categories.map((e, index) => (
                  <RestaurantCategory
                    key={e.card.card.title}
                    data={e?.card?.card}
                    showmenu={index === showmenui ? true : false}
                    setShowmenui={() => setShowmenui(index)}
                  />
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">No menu items available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
