import React from "react";

export default function NavigationCat() {
  return (
    <>
      <div className="item-filter desktop-hide">
        <a href="#" className="filter-trigger label">
          <i className="ri-menu-2-line ri-2x" />
          <span>Filter</span>
        </a>
      </div>
      <div className="item-sortir">
        <div className="label">
          <span className="mobile-hide">Sort by default</span>
          <div className="desktop-hide">Default</div>
          <i className="ri-arrow-down-s-line" />
        </div>
        <ul>
          <li>Default</li>
          <li>Product Name</li>
          <li>Price</li>
          <li>Brand</li>
        </ul>
      </div>
      <div className="item-perpage mobile-hide">
        <div className="label">Items 10 per page</div>
        <div className="desktop-hide">10</div>
        {/* <i class="ri-arrow-down-s-line"></i> */}
      </div>
      <div className="item-options">
        <div className="label">
          <span className="mobile-hide">Show 10 per page</span>
          <div className="desktop-hide">10</div>
          <i className="ri-arrow-down-s-line" />
        </div>
        <ul>
          <li>10</li>
          <li>20</li>
          <li>30</li>
          <li>All</li>
        </ul>
      </div>
    </>
  );
}
