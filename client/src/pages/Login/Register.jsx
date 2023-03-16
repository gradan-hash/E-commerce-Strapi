import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import image2 from "../../img/image2.jpg";
import image5 from "../../img/image5.jpg";
const Register = () => {
  return (
    <div className="register">
      <div className="leftregister">
        <div className="lf-wrapper">
          <p className="lf-text">
            Please Create Account and Enjoy Best Offers{" "}
          </p>
          <br></br>
          <div className="imgregister">
            <img src={image2} alt="" className="imgreg" />
          </div>
        </div>
      </div>
      <div className="centerregister">
        <div className="ct-wrapper">
          <form>
          <br></br>
            <h4 className="ct-head">Sign Up</h4>
            <div className="registerdetails">
              {" "}
              <input
                type="text"
                min={4}
                required
                name="username"
                className="regformdetails"
                placeholder="Username"
              />{" "}
              <br></br>
              <br></br>
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
            <button className="signup">Sign Up</button>
            <p className="extra-commet">
              "Already have an account Please{" "}
              <Link to="/accounts/login" className="ex-link">
                Login
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
            <img src={image5} alt="" className="imgreg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
