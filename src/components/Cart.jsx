import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "./CategoryMenu";
import { clearCart } from "../utils/CartSlice";
import { Button } from "./UI/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h1 className="text-4xl font-bold text-center my-10">
        Your Favourite Cart
      </h1>
      <CategoryMenu items={cartItems} />
      <br></br>
      {cartItems.length !== 0 && (
        <Button
          size="lg"
          onClick={handleClearCart}
          className="mt-4 bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300 rounded text-center mx-auto block"
        >
          Clear Cart
        </Button>
      )}
      {cartItems.length === 0 && (
        <div>
          <h5
            style={{
              color: "red",
              fontSize: "24px",
              display: "block",
              textAlign: "center",
            }}
          >
            Cart is empty Add items to the cart !!
          </h5>
          <br></br>
          <Link
            className="mt-4 w-xs font-medium text-xl py-5 px-10 bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300 rounded text-center mx-auto block"
            to="/products"
          >
            Select Food Now
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;
