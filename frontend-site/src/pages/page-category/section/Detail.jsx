import React from "react";

export default function Detail() {
  return (
    <>
      <div className="cat-head">
        <div className="breadcrumb">
          <ul className="flexitem">
            <li>
              <a href="#">Home</a>
            </li>
            <li>Tất cả sản phẩm</li>
          </ul>
        </div>
        <div className="page-title">
          <h1>Women</h1>
        </div>
        <div className="cat-description">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni et
            aut autem ex cumque quasi voluptatem magnam excepturi. Optio
            numquam, minima iusto autem repellendus harum debitis inventore.
            Illo, ducimus consectetur. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magni et aut autem ex cumque quasi voluptatem
            magnam excepturi. Optio numquam, minima iusto autem repellendus
            harum debitis inventore. Illo, ducimus consectetur. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Magni et aut autem ex
            cumque quasi voluptatem magnam excepturi. Optio numquam, minima
            iusto autem repellendus harum debitis inventore. Illo, ducimus
            consectetur.
          </p>
        </div>
        <div className="cat-navigation flexitem">
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
        </div>
      </div>
    </>
  );
}
