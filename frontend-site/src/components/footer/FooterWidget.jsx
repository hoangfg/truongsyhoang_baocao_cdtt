import React from "react";
import { Link } from "react-router-dom";

const FooterWidget = ({ pages, publishers, posts, configs }) => {
  const filterPage = posts.filter(
    (item) => item.status === 0 && item.type === "page"
  );
  const filterPost = posts.filter(
    (item) => item.status === 0 && item.type === "post"
  );
  const filterConfig = configs.filter((item) => item.status === 0);
  const firstConfig = filterConfig[0];
  return (
    <div className="widgets">
      <div className="container">
        <div className="wrapper">
          <div className="flexwrap">
            <div className="row">
              <div className="item mini-links">
                <h4>LIÊN HỆ</h4>
                <ul className="flexcol">
                  <li>
                    <p>
                      email:
                      <strong style={{ color: "black" }}>
                        {" "}
                        {firstConfig?.email}
                      </strong>
                    </p>
                  </li>
                  <li>
                    <p>
                      phone:
                      <strong style={{ color: "black" }}>
                        {" "}
                        {firstConfig?.phone}
                      </strong>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Thông tin</h4>
                <ul className="flexcol">
                  {filterPage &&
                    filterPage.map((item) => (
                      <li key={item.id}>
                        <Link to={`/page/${item.slug}`}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Nhà xuất bản</h4>
                <ul className="flexcol">
                  {publishers &&
                    publishers
                      .filter((pub) => pub.status === "Visible")
                      .map((item) => (
                        <li key={"p" + item.id}>
                          <Link to={`/publisher/${item.slug}`}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Bài viết</h4>
                <ul className="flexcol">
                  {filterPost &&
                    filterPost.map((item) => (
                      <li key={item.id}>
                        <Link to={`/post/${item.slug}`}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterWidget;
