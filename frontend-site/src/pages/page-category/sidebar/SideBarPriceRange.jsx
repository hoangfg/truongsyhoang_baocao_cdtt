import React from "react";

export default function SideBarPriceRange() {
  return (
    <div className="byprice">
      <div className="range-track">
        <input type="range" defaultValue={25000} min={0} max={1000000} />
      </div>
      <div className="price-range">
        <span className="price-form">$50</span>
        <span className="price-to">$500</span>
      </div>
    </div>
  );
}
