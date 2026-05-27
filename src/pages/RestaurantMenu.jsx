import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_LIST, REST_MENU_LIST_IMG } from "../utils/constants";
import Shimmer from "../components/Shimmer";
import RestaurantCategory from "../components/RestaurantCategory";
import { Star, MapPin, Flame } from "lucide-react";
import { Link } from "react-router-dom";

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
// console.log(restaurantInfo);
  if (!restaurantInfo) {
    return (
      <div className="flex items-center justify-center h-screen text-xl text-gray-500">
        Restaurant not found
      </div>
    );
  }

  const { name, avgRating, costForTwo, cloudinaryImageId, cuisines } = restaurantInfo;
// console.log(resMenu);
  const categories = resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (e) => e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{name}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              <Star className="w-4 h-4 fill-green-600 text-green-600" />
              {avgRating}
            </div>
            <span className="text-gray-600 text-sm">{costForTwo}</span>
            <span className="flex items-center gap-1 text-gray-600 text-sm">
              <Flame className="w-4 h-4 text-red-500" />
              {cuisines.slice(0, 3).join(", ")}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <img
                src={REST_MENU_LIST_IMG + cloudinaryImageId}
                alt={name}
                className="w-full rounded-2xl object-cover shadow-lg"
              />
              <div className="mt-4 rounded-xl bg-white p-4 shadow">
                <p className="mb-3 text-sm font-medium text-gray-600">Cuisines</p>
                <div className="flex flex-wrap gap-2">
                  {cuisines.map((cuisine) => (
                    <span key={cuisine} className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                      {cuisine}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Menu</h2>
              <Link
                to="/cart"
                className="inline-flex w-full items-center justify-center rounded-full bg-red-500 px-6 py-3 text-center text-base font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 sm:w-auto"
              >
                View Cart
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {categories && categories.length > 0 ? (
                categories.map((e, index) => (
                  <RestaurantCategory
                    key={e.card.card.title}
                    data={e?.card?.card}
                    showmenu={index === showmenui}
                    setShowmenui={() => setShowmenui(index)}
                  />
                ))
              ) : (
                <p className="rounded-3xl bg-white p-8 text-center text-gray-500 shadow-sm">No menu items available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
