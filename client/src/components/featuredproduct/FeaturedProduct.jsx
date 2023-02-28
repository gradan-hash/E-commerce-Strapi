import Cards from "../cards/Cards";
import "./featuredproducts.scss";

import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  // console.log(data)

  return (
    <div className="featuredproducts">
      <div className="top">
        <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Products</h1>
        <p>
          "Take advantage of our top sales by securing your purchase at the
          earliest convenience."
        </p>
      
      </div>
      <div className="bottom">
        {loading ? (
          "loading"
        ) : error ? (
          <p>There was an error loading the data.</p>
        ) : data?.length ? (
          data.map((item) => <Cards item={item} key={item.id} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;
