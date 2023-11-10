import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopSearch() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    navigate(`/search/${searchTerm}`);

  };
  return (
    <div className="header-main mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="right">
            <div className="search-box">
              <form onSubmit={handleSubmit} className="search">
                <span className="icon-large">
                  <i className="ri-search-line" />
                </span>
                <input
                  type="search"
                  name="searchTerm"
                  id="searchTerm"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <button type="submit">Tìm kiếm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
