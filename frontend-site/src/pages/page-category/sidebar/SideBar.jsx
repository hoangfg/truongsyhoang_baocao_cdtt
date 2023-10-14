import React from "react";
import SideBarItem from "./SideBarItem";
import SideBarPriceRange from "./SideBarPriceRange";

export default function SideBar() {
  return (
    <div className="row sidebar">
      <div className="filter">
        <div className="filter-block" id="category">
          <h4>Category</h4>
          <ul>
            <SideBarItem />
          </ul>
        </div>
        <div className="filter-block" id="activity">
          <h4>Activity</h4>
          <ul>
            <SideBarItem />
          </ul>
        </div>
        <div className="filter-block">
          <h4>Brand</h4>
          <ul>
            <SideBarItem />
          </ul>
        </div>
        {/* <div className="filter-block products" id="color">
          <h4>Color</h4>
          <ul className="bycolor variant flexitem">
            <li>
              <input type="radio" name="color" id="cogrey" />
              <label htmlFor="cogrey" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="coblue" />
              <label htmlFor="coblue" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="cogreen" />
              <label htmlFor="cogreen" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="cored" />
              <label htmlFor="cored" className="circle" />
            </li>
            <li>
              <input type="radio" name="color" id="colight" />
              <label htmlFor="colight" className="circle" />
            </li>
          </ul>
        </div> */}
        <div className="filter-block pricing">
          <h4>Price</h4>
          <SideBarPriceRange />
        </div>
      </div>
    </div>
  );
}
