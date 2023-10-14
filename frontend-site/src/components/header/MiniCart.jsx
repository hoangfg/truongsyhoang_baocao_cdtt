import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MiniCart() {
  useEffect(() => {
    const divtoShow = ".mini-cart";
    const divPopup = document.querySelector(divtoShow);
    const divTrigger = document.querySelector(".cart-trigger");

    if (divPopup && divTrigger) {
      divTrigger.addEventListener("click", () => {
        setTimeout(() => {
          if (!divPopup.classList.contains("show")) {
            divPopup.classList.add("show");
          }
        }, 250);
      });

      document.addEventListener("click", (e) => {
        const isClosest = e.target.closest(divtoShow);
        if (!isClosest && divPopup.classList.contains("show")) {
          divPopup.classList.remove("show");
        }
      });
    }

    return () => {
      if (divTrigger) {
        divTrigger.removeEventListener("click", () => {});
      }
      document.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div className="mini-cart">
      <div className="content">
        <div className="cart-head">5 items is cart</div>
        <div className="cart-body">
          <ul className="products mini">
            <li className="item">
              <div className="thumbnail object-cover">
                <Link href="#">
                  <img src="./assets/products/home1.jpg" alt="5" />
                </Link>
              </div>
              <div className="item-content">
                <p>
                  <Link href="#">Dimmable Ceiling Light Modern</Link>
                </p>
                <span className="price">
                  <span>1279.99</span>
                  <span className="fly-item">
                    {" "}
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <Link href="#" className="item-remove">
                <i className="ri-close-line" />
              </Link>
            </li>
            <li className="item">
              <div className="thumbnail object-cover">
                <Link href="#">
                  <img src="./assets/products/home2.jpg" alt="1" />
                </Link>
              </div>
              <div className="item-content">
                <p>
                  <Link href="#">Dimmable Ceiling Light Modern</Link>
                </p>
                <span className="price">
                  <span>1279.99</span>
                  <span className="fly-item">
                    {" "}
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <Link href="#" className="item-remove">
                <i className="ri-close-line" />
              </Link>
            </li>
            <li className="item">
              <div className="thumbnail object-cover">
                <Link href="#">
                  <img src="./assets/products/home3.jpg" alt="3" />
                </Link>
              </div>
              <div className="item-content">
                <p>
                  <Link href="#">Dimmable Ceiling Light Modern</Link>
                </p>
                <span className="price">
                  <span>1279.99</span>
                  <span className="fly-item">
                    {" "}
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <Link href="#" className="item-remove">
                <i className="ri-close-line" />
              </Link>
            </li>
            <li className="item">
              <div className="thumbnail object-cover">
                <Link href="#">
                  <img src="./assets/products/home4.jpg" alt="4" />
                </Link>
              </div>
              <div className="item-content">
                <p>
                  <Link href="#">Dimmable Ceiling Light Modern</Link>
                </p>
                <span className="price">
                  <span>1279.99</span>
                  <span className="fly-item">
                    {" "}
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <Link href="#" className="item-remove">
                <i className="ri-close-line" />
              </Link>
            </li>
            <li className="item">
              <div className="thumbnail object-cover">
                <Link href="#">
                  <img src="./assets/products/home5.jpg" alt="5" />
                </Link>
              </div>
              <div className="item-content">
                <p>
                  <Link href="#">Dimmable Ceiling Light Modern</Link>
                </p>
                <span className="price">
                  <span>1279.99</span>
                  <span className="fly-item">
                    {" "}
                    <span>2x</span>
                  </span>
                </span>
              </div>
              <Link href="#" className="item-remove">
                <i className="ri-close-line" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="cart-footer">
          <div className="subtotal">
            <p>Subtotal</p>
            <p>
              <strong>$1.622</strong>
            </p>
          </div>
          <div className="actions">
            <Link to="/checkout" className="primary-button">
              Checkout
            </Link>
            <Link to="/cart" className="secondary-button">
              View cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
