import React from 'react'

export default function CartItem() {
  return (
    <tr>
      <td className="flexitem">
        <div className="thumbnail object-cover">
          <a href="#">
            <img src="assets/products/home2.jpg" alt />
          </a>
        </div>
        <div className="content">
          <strong>
            <a href="#">Dimmable Ceiling Light Modern</a>
          </strong>
          <p>Color: Gold</p>
        </div>
      </td>
      <td>$279.99</td>
      <td>
        <div className="qty-control flexitem">
          <button className="minus">-</button>
          <input type="text" min={1} defaultValue={2} />
          <button className="plus">+</button>
        </div>
      </td>
      <td>$599.98</td>
      <td>
        <a href="#" className="item-remove">
          <i className="ri-close-line" />
        </a>
      </td>
    </tr>
  );
}
