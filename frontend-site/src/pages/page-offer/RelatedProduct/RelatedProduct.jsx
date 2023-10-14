import React from "react";
import RelatedItem from "./RelatedItem";
import { Link } from "react-router-dom";

export default function RelatedProduct() {
  return (
    <div className="column">
      <div className="sectop flexitem">
        <h2>
          <span className="circle" />
          <span>Related Product</span>
        </h2>
        <div className="second-links">
          <Link href="#" className="view-all">
            View all
            <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
      <div className="products main flexwrap">
        <RelatedItem />
      </div>
    </div>
  );
}
