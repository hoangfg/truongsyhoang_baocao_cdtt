import React from "react";
import { Link } from "react-router-dom";
import FeatureItem from "../../../components/FeatureItem";


export default function Feature() {
  return (
    <div className="features">
      <div className="container">
        <div className="wrapper">
          <div className="column">
            <div className="sectop flexitem">
              <h2>
                <span className="circle" />
                <span>Features Product</span>
              </h2>
              <div className="second-links">
                <Link href="#" className="view-all">
                  View all
                  <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
            <div className="products main flexwrap">
              <FeatureItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
