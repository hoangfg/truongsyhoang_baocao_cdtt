import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterInfo extends Component {
  render() {
    return (
      <div className="footer-info">
        <div className="container">
          <div className="wrapper">
            <div className="flexcol">
              <div className="logo">
                <Link href="#">
                  <span className="circle" />
                  .HoangFG
                </Link>
              </div>
              <div className="social">
                <ul className="flexitem">
                  <li>
                    <Link href={`https://twitter.com/`}>
                      <i className="ri-twitter-line" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="ri-facebook-line" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="ri-instagram-line" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="ri-linkedin-line" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="ri-youtube-line" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mini-text">
              Copyright 2023 © .HoangFG. All right reserved
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterInfo;
