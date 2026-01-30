import React from "react";
import { CDN_URL } from "../utils/constants";

const ProductCard = ({ proList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    proList.info;
  return (
    <div className="p-6 w-88 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <img src={CDN_URL + cloudinaryImageId} alt="product_image" className="rounded-lg" />
      </div>
      <div className="prod-details">
        <div className="flex items-center justify-between mt-4 mb-2">
          <div className="font-medium text-3xl">{name}</div>
          <div className="font-base text-xl">Rating: {avgRating}</div>
        </div>
        <div className="font-base text-xl mt-2 mb-2">{cuisines.join(", ")}</div>
        <div className="font-base text-xl mt-2 mb-2">{costForTwo}</div>
      </div>
    </div>
  );
};
export default ProductCard;
