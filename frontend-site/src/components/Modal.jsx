import React from "react";
import { useEffect } from "react";

export default function Modal() {
  // useEffect(() => {
  //   window.onload = function () {
  //     document.querySelector(".site").classList.toggle("showmodal");
  //   };
  //   document
  //     .querySelector(".modalclose")
  //     .addEventListener("click", function () {
  //       document.querySelector(".site").classList.remove("showmodal");
  //     });
  // }, []);
  return (
    <div id="modal">
      <div className="modal">
        <div className="content flexcol">
          <div className="image object-cover">
            <img src="assets/products/apparel4.jpg" alt />
          </div>
          <h2>Get the latest deals and coupons</h2>
          <p className="mobile-hide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            enim explicabo corporis expedita facilis id.
          </p>
          <form action className="search">
            <span className="icon-large">
              <i className="ri-mail-line" />
            </span>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </form>
          <a href="#" className="mini-text">
            Do not show me this again
          </a>
          <a href="#" className="t-close modalclose flexcol">
            <i className="ri-close-line" />
          </a>
        </div>
      </div>
    </div>
  );
}
