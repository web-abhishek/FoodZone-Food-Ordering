import { useState, useEffect } from "react";
// import { FET_URL } from "./constants";
import {REST_LIST} from "./constants"
const UseFetchProducts = () => {
  const [prodList, setProdList] = useState([]);
  const [filterProdList, setFilterProdList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(FET_URL);
    const data = await fetch(REST_LIST);
    const json = await data.json();
    console.log(json);

    setProdList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterProdList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
  };
  return {prodList, setProdList, filterProdList, setFilterProdList};
};

export default UseFetchProducts;
