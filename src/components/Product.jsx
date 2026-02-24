import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import UseFetchProducts from "../utils/UseFetchProducts";

const Product = () => {
  
  const {prodList, setProdList, filterProdList, setFilterProdList} = UseFetchProducts()

  const [searchText, setSearchText] = useState("");

  // if(prodList.length === 0){
  //   return <Shimmer/>
  // }

  return prodList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between mt-10 mb-5">
        <button
            className="cursor-pointer m-4 p-2 bg-green-700 text-white rounded-md"
            onClick={() => {
              // console.log("button clicked");
              const filteredProdList = prodList.filter(
                (item) => item.info.avgRating > 4
              );
              setProdList(filteredProdList);
            }}
          >
            Top Rated Restaurants{" "}
        </button>
        <div className="flex items-center">
          <input
          className="my-4 mx-2 p-2 shadow-xl border border-gray-200"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="text-white bg-linear-to-r from-red-400 via-red-500 to-red-600 hover:bg-linear-to-br focus:ring-4 
              focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
              dark:shadow-red-800/80 font-medium rounded text-lg px-6 py-3 text-center leading-5"
            onClick={() => {
              // console.log(searchText);
              const filteredList = prodList.filter((e) =>
                e.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterProdList(filteredList);
            }}
          >
            Search Now
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 py-20">
            {filterProdList.map((items) => (
             <Link key={items.info.id} to={"/restaurants/" + items.info.id}> <ProductCard proList={items} /> </Link> 
            ))}
          </div>
    </div>
  );
};

export default Product;
