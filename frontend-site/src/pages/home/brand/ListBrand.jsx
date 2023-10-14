import React from 'react'
import { Link } from 'react-router-dom'

export default function ListBrand() {
  return (
  <div className="brands">
  <div className="container">
    <div className="wrapper flexitem">
      <div className="item">
        <Link href="#">
          <img src="././assets/brands/asus.png" alt />
        </Link>
      </div>
      <div className="item">
        <Link href="#">
          <img src="./assets/brands/dng.png" alt />
        </Link>
      </div>
      <div className="item">
        <Link href="#">
          <img src="./assets/brands/hurley.png" alt />
        </Link>
      </div>
      <div className="item">
        <Link href="#">
          <img src="./assets/brands/oppo.png" alt />
        </Link>
      </div>
      <div className="item">
        <Link href="#">
          <img src="./assets/brands/samsung.png" alt />
        </Link>
      </div>
    </div>
  </div>
</div>

  )
}
