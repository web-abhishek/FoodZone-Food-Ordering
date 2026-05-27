import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FOOD_ITEM_CDN_URL } from "../utils/constants";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../utils/CartSlice";

const paymentOptions = [
  { id: "credit_card", label: "Credit / Debit Card" },
  { id: "upi", label: "UPI" },
  { id: "netbanking", label: "Net Banking" },
  { id: "cash", label: "Cash on Delivery" },
];

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "credit_card",
  });

  const [errors, setErrors] = useState({});

  const orderTotal = useMemo(
    () =>
      cartItems.reduce((total, item) => {
        const price = item.card?.info?.price || 0;
        return total + price / 100;
      }, 0),
    [cartItems]
  );

  const validateFields = () => {
    const newErrors = {};

    if (!customer.name.trim()) newErrors.name = "Name is required.";
    if (!customer.email.trim()) newErrors.email = "Email is required.";
    if (!customer.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!customer.address.trim()) newErrors.address = "Delivery address is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setCustomer((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handlePlaceOrder = () => {
    if (!cartItems.length) return;
    if (!validateFields()) return;

    const orderId = `FDZ-${Math.floor(100000 + Math.random() * 900000)}`;
    dispatch(clearCart());
    navigate("/thank-you", {
      state: {
        orderId,
        customerName: customer.name,
        total: orderTotal,
      },
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm text-indigo-600 uppercase tracking-[0.32em]">Checkout</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Complete your order</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Fill in your details, choose a payment option, and place your order. This is a frontend-only dummy payment flow.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-red-700">Your cart is empty</h2>
            <p className="mt-3 text-slate-600">Add items to your cart to continue to checkout.</p>
            <Link
              to="/products"
              className="mt-6 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.4fr_1fr]">
            <section className="space-y-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Customer details</h2>
                <p className="mt-2 text-slate-500">Enter your contact and delivery information.</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-slate-800 font-medium">Full name</span>
                  <input
                    type="text"
                    value={customer.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </label>

                <label className="block">
                  <span className="text-slate-800 font-medium">Email address</span>
                  <input
                    type="email"
                    value={customer.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500"
                    placeholder="example@mail.com"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </label>

                <label className="block">
                  <span className="text-slate-800 font-medium">Phone number</span>
                  <input
                    type="tel"
                    value={customer.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-slate-800 font-medium">Delivery address</span>
                  <textarea
                    value={customer.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="123 Food Street, City, State, PIN"
                    className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-indigo-500 min-h-30 resize-none"
                  />
                  {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
                </label>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">Payment method</h3>
                    <p className="text-slate-500">Select one of the available payment options.</p>
                  </div>
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">Dummy payment</span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {paymentOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleChange("paymentMethod", option.id)}
                      className={`rounded-3xl border px-5 py-4 text-left transition ${
                        customer.paymentMethod === option.id
                          ? "border-indigo-500 bg-indigo-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <span className="block text-base font-semibold text-slate-900">{option.label}</span>
                      <span className="mt-1 block text-sm text-slate-500">No real transaction will occur.</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="shadow-lg shadow-black/30 w-full sm:w-1/3 mx-auto block rounded-full bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
                >
                  Place Order
                </button>
              </div>
            </section>

            <aside className="space-y-6 rounded-4xl border border-slate-200 bg-slate-950/95 p-6 text-slate-100 shadow-xl shadow-slate-300/10 lg:sticky lg:top-24">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Order summary</p>
                    <h2 className="text-2xl font-semibold">Your products</h2>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200">{cartItems.length} items</span>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item, index) => {
                    const { name, price, description, imageId } = item.card?.info || {};
                    const itemPrice = (price || 0) / 100;
                    return (
                      <div key={`${item.card?.info?.id || index}-${index}`} className="flex gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                        <div className="h-20 w-20 overflow-hidden rounded-3xl bg-slate-800">
                          {imageId ? (
                            <img src={`${FOOD_ITEM_CDN_URL}${imageId}`} alt={name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="flex h-full items-center justify-center text-slate-500">No Image</div>
                          )}
                        </div>
                        <div className="grow">
                          <h3 className="font-semibold text-slate-100">{name || "Food item"}</h3>
                          <p className="mt-1 text-sm text-slate-400 line-clamp-2">{description || "Delicious food item from your cart."}</p>
                          <p className="mt-3 text-base font-semibold text-slate-100">₹{itemPrice.toFixed(2)}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/80 p-5 border border-white/10">
                <div className="flex items-center justify-between text-slate-400 mb-3">
                  <span>Subtotal</span>
                  <span>₹{orderTotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 mb-3">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xl font-semibold text-white">
                  <span>Total</span>
                  <span>₹{orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
