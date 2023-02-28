import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1564149/pexels-photo-1564149.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/4219178/pexels-photo-4219178.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              new season
            </Link>
          </button>
        </div>
      </div>

      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/90764/man-studio-portrait-light-90764.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1212048/pexels-photo-1212048.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <img
            src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories;
