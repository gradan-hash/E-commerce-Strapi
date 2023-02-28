import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="top"></div>

        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Fqs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            lorema iphdjsdh hhkc jhf d duhc bhf jhcfejxsk khjekjxryfr yfkjfhrjcn
            ggetrtr ggjkhdkaxkawjvfhbcdbcdcd bj
          </span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>dbjhj cchjfrhhkrjjr jjrfyyrt djkjh</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">corneliustore</span>
          <span className="copyright">
            @ Copyright 2023.All rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Footer;
