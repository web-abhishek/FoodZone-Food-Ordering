import React from "react";
import { CDN_URL } from "../utils/constants";

const ProductCard = ({ proList }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    proList.info;
  return (
    <div className="p-6 w-88 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="prod-img">
        <img src={CDN_URL + cloudinaryImageId} alt="product_image" className="rounded-lg" />
      </div>
      <div className="prod-details">
        <div className="prod-info">
          <div className="prod-name">{name}</div>
          <div className="prod-rating">{avgRating}</div>
        </div>
        <div className="prod-cuisine-info">
          <div className="prod-cuisine">{cuisines.join()}</div>
          <div className="prod-price">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
