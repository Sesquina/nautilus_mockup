import React, { Component } from "react";
import "./Navigate.css";
import nautilus from "../images/global/nautilus-logo-sprite@2x.png";

class Navigate extends Component {
  render() {
    return (
      <div class="container">
        <div class="logo-img">
          <img alt="" src={nautilus} className="d-inline-block" />
        </div>
        <nav>
          <ul>
            <li>ISSUES</li>
            <li>TOPICS</li>
            <li>BLOG</li>
            <li>NEWSLETTER</li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>LOGIN</li>
            <li>
              <button className="subscribe-btn">SUBSCRIBE</button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navigate;
