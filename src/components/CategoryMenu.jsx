import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";
import { FOOD_ITEM_CDN_URL } from "../utils/constants";
import { Plus } from "lucide-react";

const CategoryMenu = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const { name, price, description, imageId } = item.card.info;
        const itemPrice = (price || 0) / 100;

        return (
          <div
            key={item.card.info.id}
            className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow flex gap-4 group"
          >
            {/* Item Image */}
            <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
              {imageId ? (
                <img
                  src={`${FOOD_ITEM_CDN_URL}${imageId}`}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center">
                  No Image
                </div>
              )}
            </div>

            {/* Item Details */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 text-base mb-1">{name}</h4>
                <p className="text-gray-600 text-sm line-clamp-2">{description || "No description available"}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">₹{itemPrice}</span>
              </div>
            </div>

            {/* Add Button */}
            <div className="flex-shrink-0 flex items-end">
              <button
                onClick={() => handleAddItem(item)}
                className="bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 flex items-center gap-1 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryMenu;
