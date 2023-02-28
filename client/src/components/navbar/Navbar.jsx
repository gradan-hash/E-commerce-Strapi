import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";

function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [menid, SetmenId] = useState([]);
  //take title of category from db::
  const { data, loading, error } = useFetch("/categories");
  let womenIds = [];
  let menIds = [];
  let childrenIds = [];

  if (data) {
    const categoryData = data.map((category) => {
      return {
        title: category.attributes.title,
        id: category.id,
      };
    });

    womenIds = categoryData
      .filter((category) => category.title === "women")
      .map((category) => category.id);

    menIds = categoryData
      .filter((category) => category.title === "men")
      .map((category) => category.id);

    childrenIds = categoryData
      .filter((category) => category.title === "children")
      .map((category) => category.id);
  }
  console.log(womenIds);
  console.log(menIds);
  console.log(childrenIds);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/kenya.png" alt="" className="img" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            KSH
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <Link className="link" to={`/products/${menIds}`}>
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={`/products/${womenIds}`}>
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to={`/products/${childrenIds}`}>
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">
            CORNELIUSTORE
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            <div className="carticon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
