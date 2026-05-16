import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "../components/CategoryMenu";
import { clearCart, removeItem } from "../utils/CartSlice";
import { Button } from "../components/UI/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const totalAmount = useMemo(
    () =>
      cartItems.reduce((sum, item) => {
        const price = item.card?.info?.price || 0;
        return sum + price / 100;
      }, 0),
    [cartItems]
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col gap-6 rounded-4xl border border-slate-200 bg-white p-8 shadow-xl sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Your Favourite Cart</h1>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Review your selected food items, remove anything you don't want, or continue to the checkout page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {cartItems.length !== 0 && (
              <>
                <Button
                  size="lg"
                  onClick={handleClearCart}
                  className="bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-300 rounded"
                >
                  Clear Cart
                </Button>
                <Link
                  to="/checkout"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </>
            )}
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-red-700">Your cart is empty</h2>
            <p className="mt-3 text-slate-600">Add items to your cart to place an order.</p>
            <Link
              className="mt-6 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
              to="/products"
            >
              Select Food Now
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 xl:grid-cols-[1.65fr_0.95fr]">
            <section className="space-y-4">
              <CategoryMenu items={cartItems} isCart onRemove={handleRemoveItem} />
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-slate-900">Order summary</h2>
              <p className="mt-2 text-slate-500">One final review before checkout.</p>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-slate-600">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-slate-200 pt-4 flex justify-between text-xl font-semibold text-slate-900">
                  <span>Total</span>
                  <span>₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
