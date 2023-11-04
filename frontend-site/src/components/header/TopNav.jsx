import React from "react";
import { Link } from "react-router-dom";
// import AdminAuthBox from "../../scences/global/AdminAuthBox";

export default function TopNav() {
  return (
    <div className="header-top mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <ul className="flexitem main-links">
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Sản phẩm nổi bật</Link>
              </li>
              <li>
                <Link href="#">Danh sách yêu thích</Link>
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="flexitem main-links">
              <li>
                <Link to="signin">Đăng ký</Link>
              </li>
              <li>
                <Link href="#">Tài khoản của tôi</Link>
              </li>
              <li>
                <Link href="#">Theo dõi đơn hàng</Link>
              </li>
              <li>
                <Link href="#">
                  USD
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line" />
                  </span>
                </Link>
                <ul>
                  <li className="current">
                    <Link href="#">USD</Link>
                  </li>
                  <li>
                    <Link href="#">EURO</Link>
                  </li>
                  <li>
                    <Link href="#">GBP</Link>
                  </li>
                  <li>
                    <Link href="#">IDR</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">
                  English
                  <span className="icon-small">
                    <i className="ri-arrow-down-s-line" />
                  </span>
                </Link>
                <ul>
                  <li className="current">
                    <Link href="#">English</Link>
                  </li>
                  <li>
                    <Link href="#">German</Link>
                  </li>
                  <li>
                    <Link href="#">Spanish</Link>
                  </li>
                  <li>
                    <Link href="#">Bahasa</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
