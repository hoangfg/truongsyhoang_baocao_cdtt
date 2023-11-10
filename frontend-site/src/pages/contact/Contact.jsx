import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="single-product">
      <div className="container">
        <div className="wrapper">
          <div className="breadcrumb">
            <ul className="flexitem">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>

              <li>Liên hệ</li>
            </ul>
          </div>
          {/* breadcrumb  */}
          <div className="column">
            <div className="products one">
              <div className="flexwrap">
                <div className="row">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.5109182924814!2d106.78701546955277!3d10.88428289932944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d890c5500231%3A0x620d55718a841b2a!2zxJDDtG5nIEjDsmEsIMSQw7RuZyBIb8OgLCBExKkgQW4sIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1699370312026!5m2!1svi!2s"
                    width={445}
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="row">
                  <h1>Thông tin liên lạc</h1>
                  <div className="review-block">
                    <div id="review-form" className="review-form">
                      <form action id="review">
                        <p>
                          <label htmlFor="name">Email</label>
                          <input type="text" name="name" id="name" />
                        </p>
                        <p>
                          <label htmlFor="sumary">Title</label>
                          <input type="text" name="sumary" id="sumary" />
                        </p>
                        <p>
                          <label>Review</label>
                          <textarea
                            name
                            id
                            cols={30}
                            rows={2}
                            defaultValue={""}
                          />
                        </p>
                        <p>
                          <a href="#" className="primary-button">
                            Gửi liên hệ
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
