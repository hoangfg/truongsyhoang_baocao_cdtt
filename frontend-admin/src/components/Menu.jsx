import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to={"/admin"} className="brand-link">
        <img
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition os-host-scrollbar-vertical-hidden">
        <div className="os-resize-observer-host observed">
          <div
            className="os-resize-observer"
            style={{ left: 0, right: "auto" }}
          />
        </div>
        <div
          className="os-size-auto-observer observed"
          style={{ height: "calc(100% + 1px)", float: "left" }}
        >
          <div className="os-resize-observer" />
        </div>
        <div
          className="os-content-glue"
          style={{ margin: "0px -8px", width: 249, height: 688 }}
        />
        <div className="os-padding">
          <div
            className="os-viewport os-viewport-native-scrollbars-invisible"
            style={{}}
          >
            <div
              className="os-content"
              style={{ padding: "0px 8px", height: "100%", width: "100%" }}
            >
              <nav className="mt-2">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Quản lý nhà xuất bản
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul
                      className="nav nav-treeview"
                      style={{ display: "none" }}
                    >
                      <li className="nav-item">
                        <Link to="admin/publisher" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Tất cả sản phẩm</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/admin/publisher/add" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Thêm sản phẩm</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Quản lý danh mục
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul
                      className="nav nav-treeview"
                      style={{ display: "none" }}
                    >
                      <li className="nav-item">
                        <Link to="/admin/category" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Tất cả danh mục</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/admin/category/add" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Thêm danh mục</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Quản lý thương hiệu
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul
                      className="nav nav-treeview"
                      style={{ display: "none" }}
                    >
                      <li className="nav-item">
                        <Link to="/admin/brand" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Tất cả thương hiệu</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/admin/brand/add" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Thêm thương hiệu</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#st" className="nav-link">
                      <i className="nav-icon fas fa-table" />
                      <p>
                        Quản lý chủ đề
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul
                      className="nav nav-treeview"
                      style={{ display: "none" }}
                    >
                      <li className="nav-item">
                        <Link to="/admin/topic" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Tất cả chủ đề</p>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/admin/topic/add" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Thêm chủ đề</p>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              {/* /.sidebar-menu */}
            </div>
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ width: "100%", transform: "translate(0px, 0px)" }}
            />
          </div>
        </div>
        <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
          <div className="os-scrollbar-track">
            <div
              className="os-scrollbar-handle"
              style={{ height: "100%", transform: "translate(0px, 0px)" }}
            />
          </div>
        </div>
        <div className="os-scrollbar-corner" />
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
