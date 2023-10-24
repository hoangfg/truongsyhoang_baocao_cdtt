import React, { Component } from "react";
import { Link } from "react-router-dom";

class FooterWidget extends Component {
  render() {
    const { pages, publishers, posts } = this.props;
    let filterPage = pages.filter((item) => item.status === 0);
    let filterPost = posts.filter((item) => item.status === 0);
    return (
      <div className="widgets">
        <div className="container">
          <div className="wrapper">
            <div className="flexwrap">
              <div className="row">
                <div className="item mini-links">
                  <h4>Help &amp; Contact</h4>
                  <ul className="flexcol">
                    <li>
                      <Link href="#">Your Account</Link>
                    </li>
                    <li>
                      <Link href="#">Your Orders</Link>
                    </li>
                    <li>
                      <Link href="#">Shipping Rates</Link>
                    </li>
                    <li>
                      <Link href="#">Returns</Link>
                    </li>
                    <li>
                      <Link href="#">Assistant</Link>
                    </li>
                    <li>
                      <Link href="#">Help</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Publishers</h4>
                  <ul className="flexcol">
                    {publishers &&
                      publishers
                        .filter((pub) => pub.status === "Visible")
                        .map((item) => (
                          <React.Fragment key={"p" + item.id}>
                            <li>
                              <Link to={`/publisher/${item.slug}`}>
                                {item.name}
                              </Link>
                            </li>
                          </React.Fragment>
                        ))}
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="item mini-links">
                  <h4>Post</h4>
                  <ul className="flexcol">
                    {filterPost &&
                      filterPost.map((item) => (
                        <li>
                          <Link to={`/post/${item.slug}`}>{item.title}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              {filterPage ? (
                <div className="row">
                  <div className="item mini-links">
                    <h4>Abour Us</h4>
                    <ul className="flexcol">
                      {filterPage.map((item) => {
                        <li>
                          <Link to={`/page/${item.slug}`}>{item.title}</Link>
                        </li>;
                      })}
                    </ul>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterWidget;
