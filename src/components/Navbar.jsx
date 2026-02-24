import React, { useEffect, useState } from "react";
import foodzoneLogo from "../assets/foodzone-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);
  

  useEffect(() => {
    // console.log("useeffect is called");
  }, []);

  return (
    <nav className="w-full flex items-center justify-between py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="logo">
            <Link to="/"><img src={foodzoneLogo} alt="" className="w-26 h-auto"/></Link>
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-end text-md">
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/products">Products</Link>
            </li>
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/cart">Cart({cartItems.length} items)</Link>
            </li>
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <button
              className="text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:bg-linear-to-br focus:ring-4 
              focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
              dark:shadow-red-800/80 font-medium rounded ml-10 text-lg px-6 py-3 text-center leading-5"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
          </div>
        </nav>
  );
};

export default Navbar;
