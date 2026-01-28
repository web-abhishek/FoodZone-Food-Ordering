import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "./CategoryMenu";
import { clearCart } from "../utils/CartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=> store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return(
        <div>
           <h2>Cart</h2>
            <CategoryMenu items={cartItems} />
            <br></br>
            <button onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length === 0 && <h5 style={{ color: "red", fontSize: "24px" }}>Cart is empty Add items to the cart !!</h5>}
        </div>
    )
}
export default Cart;