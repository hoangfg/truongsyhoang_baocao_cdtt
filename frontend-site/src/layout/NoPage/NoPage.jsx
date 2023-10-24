import React from "react";
import "./css/style.css";
import "./css/font-awesome.css";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="agileits-main">
      <div className="agileinfo-row">
        <div className="w3top-nav">
          <div className="w3top-nav-left">
            <h1>
              <a href="index.html">Leaf 404</a>
            </h1>
          </div>
          <div className="w3top-nav-right">
            <h6>Contact Us: +1 222 3333 333 </h6>
          </div>
          <div className="clear" />
        </div>
        <div className="w3layouts-errortext">
          <h2>
            <span>4</span> <span>0</span> <span>4</span>
          </h2>
          <h3>
            Sorry! The page you are looking could not be found <br />
            <Link to="/">Go to Home Page</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
