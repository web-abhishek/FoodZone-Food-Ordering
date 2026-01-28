import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

const CategoryMenu = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // console.log("Clicked!!");
    dispatch(addItem(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id}>
          <div>
            <span>{item.card.info.name}</span>
            <span>{item.card.info.price / 100}</span>
          </div>
          <p>{item.card.info.description}</p>
          <button onClick={()=> handleAddItem(item)}><strong>Add +</strong></button>
        </div>
      ))}
    </div>
  );
};
export default CategoryMenu;
