import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Shimmer from "../components/Shimmer";
import UseFetchProducts from "../utils/UseFetchProducts";

const Product = () => {
  const { prodList, setProdList, filterProdList, setFilterProdList } = UseFetchProducts();
  const [searchText, setSearchText] = useState("");

  return prodList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between gap-4">
        <button
          className="w-full rounded-full bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-600/30 transition hover:bg-green-700 sm:w-auto"
          onClick={() => {
            const filteredProdList = prodList.filter((item) => item.info.avgRating > 4);
            setProdList(filteredProdList);
          }}
        >
          ⭐ Top Rated Restaurants
        </button>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm placeholder-slate-400 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
            type="text"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="rounded-lg bg-linear-to-r from-red-500 via-red-500 to-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/30 transition hover:bg-linear-to-br focus:outline-none focus:ring-4 focus:ring-red-200"
            onClick={() => {
              const filteredList = prodList.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterProdList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filterProdList.map((items) => (
          <Link key={items.info.id} to={"/restaurants/" + items.info.id}>
            <ProductCard proList={items} />
          </Link>
        ))}
      </div>

      {filterProdList.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-slate-500">No restaurants found. Try a different search.</p>
        </div>
      )}
    </div>
  );
};

export default Product;
