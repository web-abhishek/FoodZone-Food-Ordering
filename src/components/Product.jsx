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
    <div>
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <div className="searchbar">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-prime"
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

      <div className="product-main">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <button
            className="btn-prime"
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
          <div className="all-products">
            {filterProdList.map((items) => (
             <Link key={items.info.id} to={"/restaurants/" + items.info.id}> <ProductCard proList={items} /> </Link> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
