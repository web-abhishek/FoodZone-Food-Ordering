import React, { useState } from "react";
import foodzoneLogo from "../assets/foodzone-logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-slate-900">
          <img src={foodzoneLogo} alt="FoodZone logo" className="h-10 w-auto" />
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
          </svg>
        </button>

        <div className={`w-full lg:flex lg:w-auto ${menuOpen ? "block" : "hidden"}`}>
          <ul className="mt-4 flex flex-col gap-2 rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-lg ring-1 ring-slate-200 lg:flex-row lg:items-center lg:gap-3 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0">
            <li>
              <Link
                to="/about"
                onClick={closeMenu}
                className="block rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-red-500"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={closeMenu}
                className="block rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-red-500"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                onClick={closeMenu}
                className="block rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-red-500"
              >
                Cart ({cartItems.length} items)
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-red-500"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={closeMenu}
                className="inline-flex w-full items-center justify-center rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600 lg:w-auto"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
