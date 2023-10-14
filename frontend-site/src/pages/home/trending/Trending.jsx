import React from "react";
import Top1Trending from "./Top1Trending";
import { Link } from "react-router-dom";
import Top2Trending from "./Top2Trending";

export default function Trending() {
  return (
    <div className="trending">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span className="circle" />
              <span>Trending Product</span>
            </h2>
          </div>
          <div className="column">
            <div className="flexwrap">
              <div className="row products big">
                <Top1Trending />
              </div>
              <div className="row products mini">
                <Top2Trending />
              </div>
              <div className="row products mini">
                <Top2Trending />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
