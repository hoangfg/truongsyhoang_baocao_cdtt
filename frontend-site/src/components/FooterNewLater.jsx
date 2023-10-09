import React from 'react'

export default function FooterNewLater() {
  return (
    <div className="newsletter">
  <div className="container">
    <div className="wrapper">
      <div className="box">
        <div className="content">
          <h3>Join Our Newsletter</h3>
          <p>
            Get E-mail updates about our latter shop and
            <strong>special offers</strong>
          </p>
        </div>
        <form action="#" className="search">
          <span className="icon-large"><i className="ri-mail-line" /></span>
          <input type="mail" placeholder="Your mail address" required name defaultValue />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}
