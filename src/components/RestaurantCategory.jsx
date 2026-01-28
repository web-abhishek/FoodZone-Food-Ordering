import { useState } from "react";
import CategoryMenu from "./CategoryMenu";

const RestaurantCategory = ({ data, showmenu, setShowmenui }) => {
  // console.log(data);
  // console.log(showIndex);
  
    // const [showmenu, setShowMenu] = useState(false);

    const handleClick = () =>{
        setShowmenui()
    }
    
  return (
    <div className="max-w-7xl mx-auto px-4 flex justify-between">
      <div className="resMenu" style={{cursor:"pointer"}} onClick={handleClick}>
        <div>
          <span>
            {data.title} ({data?.itemCards?.length})
          </span>
          <span> ⬇️ </span>
        </div>
        <div>
         {showmenu && <CategoryMenu items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
