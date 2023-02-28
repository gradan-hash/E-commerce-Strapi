import React from "react";
import "./list.scss";
import Cards from "../cards/Cards";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const List = ({ subCats, maxPrice, sort, catId }) => {

  let sortOrder = "desc";
  if (sort === "asc") {
    sortOrder = "asc";
  } else if (sort === "desc") {
    sortOrder = "desc";
  }
  
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sortOrder}`
  );
  
  return (
   
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Cards item={item} key={item.id} />)}
    </div>
    
  );
};

export default List;
