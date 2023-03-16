import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import image1 from "../../img/image1.jpg";
import image3 from "../../img/image3.jpg";
const Login = () => {
  return (
    <div className="register">
      <div className="leftregister">
        <div className="lf-wrapper">
          <p className="lf-text">
            Enjoy Best Offers{" "}
          </p>
          <br></br>
          <div className="imgregister">
            <img src={image1} alt="" className="imgreg" />
          </div>
        </div>
      </div>
      <div className="centerregister">
        <div className="ct-wrapper">
          <form>
          <br></br>
            <h4 className="ct-head">Log In</h4>
            <div className="registerdetails">
              {" "}
          
             
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="regformdetails"
              />
              <br></br>
              <br></br>
              <input
                type="password"
                min={4}
                required
                name="password"
                placeholder="Password"
                className="regformdetails"
              />
            </div>
            <br></br>
            <br></br>
            <button className="signup">Log In</button>
            <p className="extra-commet">
              "Dont have Account Please{" "}
              <Link to="/accounts/register" className="ex-link">
                Register
              </Link>
              <br />
              here."
            </p>
          </form>
        </div>
      </div>
      <div className="rightregister">
        <div className="rt-wrapper">
          <p className="lf-text">Cheap and Affordable Wears </p>
          <br></br>
          <br></br>
          <div className="imgregister">
            <img src={image3} alt="" className="imgreg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
