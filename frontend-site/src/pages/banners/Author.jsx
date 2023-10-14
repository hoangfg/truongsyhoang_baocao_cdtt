import React from 'react'
import { Link } from 'react-router-dom';

export default function Author() {
  return (
    // <div className="row">
      <div className="item">
        <div className="image">
          <img src="/assets/banner/procat1.jpg" alt />
        </div>
        <div className="content mini-links">
          <h4>Beauty</h4>
          <ul className="flexcol">
            <li>
              <Link href="#">Makeup</Link>
            </li>
            <li>
              <Link href="#">Skin care</Link>
            </li>
            <li>
              <Link href="#">Hair care</Link>
            </li>
            <li>
              <Link href="#">Fragranse</Link>
            </li>
            <li>
              <Link href="#">Foot &amp; Hand care</Link>
            </li>
          </ul>
          <div className="second-links">
            <Link href="#" className="view-all">
              View all
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>
      </div>
    // </div>
  );
}
