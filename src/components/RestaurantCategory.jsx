import CategoryMenu from "./CategoryMenu";
import { ChevronDown } from "lucide-react";

const RestaurantCategory = ({ data, showmenu, setShowmenui }) => {
  const handleClick = () => {
    setShowmenui(data?.title);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold text-gray-900">
            {data.title}
            <span className="text-gray-500 font-normal ml-2">({data?.itemCards?.length})</span>
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${
            showmenu ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {showmenu && (
        <div className="border-t border-gray-200 bg-gray-50 p-4">
          <CategoryMenu items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
