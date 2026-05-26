import React from "react";
import foodzoneLogo from "../assets/foodzone-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="w-full flex items-center justify-between py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="logo">
            <Link to="/"><img src={foodzoneLogo} alt="" className="w-26 h-auto"/></Link>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap items-center justify-end text-md gap-2">
              <li className="rounded-full px-3 py-2 hover:text-red-400 transition ease-in-out delay-100">
                <Link to="/about">About Us</Link>
              </li>
              <li className="rounded-full px-3 py-2 hover:text-red-400 transition ease-in-out delay-100">
                <Link to="/products">Products</Link>
              </li>
              <li className="rounded-full px-3 py-2 hover:text-red-400 transition ease-in-out delay-100">
                <Link to="/cart">Cart({cartItems.length} items)</Link>
              </li>
              <li className="rounded-full px-3 py-2 hover:text-red-400 transition ease-in-out delay-100">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="shadow-lg shadow-black/30 rounded-full bg-red-500 px-4 py-2 text-white transition hover:bg-red-600">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
  );
};

export default Navbar;
