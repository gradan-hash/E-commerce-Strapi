import React, { useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import image2 from "../../img/image2.jpg";
import image5 from "../../img/image5.jpg";
import axios from "axios";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const register = "http://localhost:1337/api/user";
  const handleSubmit = async () => {
    try {
      const data = axios.post(register, (username, password, email));
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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
                onChange={(e) => setUsername(e.target.value)}
              />{" "}
              <br></br>
              <br></br>
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="regformdetails"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <br></br>
              <input
                type="text"
                min={4}
                required
                placeholder="Password"
                className="regformdetails"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br></br>
            <br></br>
            <button className="signup" onClick={handleSubmit}>
              Sign Up
            </button>
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
