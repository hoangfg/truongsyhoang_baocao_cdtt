import React from "react";

export default function FooterNewLater() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="wrapper">
          <div className="box">
            <div className="content">
              <h3>ĐĂNG KÝ NHẬN TIN QUA EMAIL</h3>
              <p>
                Đăng ký để nhận được tin tức mới nhất về
                <strong>
                  sản phẩm và các chương trình khuyến mại của chúng tôi.
                </strong>
              </p>
            </div>
            <form action="#" className="search">
              <span className="icon-large">
                <i className="ri-mail-line" />
              </span>
              <input
                type="mail"
                placeholder="Your mail address"
                required
                name
                defaultValue
              />
              <button type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
