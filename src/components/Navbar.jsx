import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
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
    <header>
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <nav className="w-full flex items-center justify-between">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" className="w-30"/></Link>
          </div>
          <div className="flex items-center justify-between">
            <ul className="flex items-center justify-end text-md">
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/about">About Us</Link>
            </li>
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/grocery">Groceries</Link>
            </li>
            <li className="p-3 hover:text-red-400 transition ease-in-out delay-100">
              <Link to="/">Restaurants</Link>
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
      </div>
    </header>
  );
};

export default Navbar;
