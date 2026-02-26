import React from "react";
import { Star, UtensilsCrossed, IndianRupee } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const ProductCard = ({ proList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    proList.info;

  if (!name || !cloudinaryImageId) {
    return null;
  }

  const cuisineList = Array.isArray(cuisines) ? cuisines : [];

  return (
    <div className="bg-white w-94 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-linear-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-bold text-sm">{avgRating || "N/A"}</span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <h2 className="text-xl font-bold text-gray-900 truncate hover:text-red-500 transition-colors">
          {name}
        </h2>
        <div className="flex items-start gap-2">
          <UtensilsCrossed className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-600 line-clamp-2">
            {cuisineList.length > 0 ? cuisineList.join(", ") : "No cuisines listed"}
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
          <IndianRupee className="w-5 h-5 text-red-500" />
          <span className="text-lg font-semibold text-gray-900">
            {costForTwo}
          </span>
          <span className="text-xs text-gray-500 ml-auto">for two</span>
        </div>

        <button className="w-full mt-4 bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:shadow-lg text-white hover:bg-linear-to-br focus:ring-4 
              focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
              dark:shadow-red-800/80 ml-0 text-lg text-center leading-5 active:scale-95">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
