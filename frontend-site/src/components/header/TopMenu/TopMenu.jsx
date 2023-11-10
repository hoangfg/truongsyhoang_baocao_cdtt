import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "../MiniCart";
import Menu from "./Menu";

import { getMenus } from "../../../redux/actions/menuAction";
import { connect } from "react-redux";
import withRouter from "../../../helpers/withRouter";
import { useEffect } from "react";
function TopMenu(props) {
  const { menus } = props;

  useEffect(() => {
    props.getMenus();
  }, []);
  const filterMenus = menus.filter(
    (menus) =>
      menus.status === 0 &&
      menus.parent_id === 0 &&
      menus.position === "mainmenu"
  );

  return (
    <div className="header-nav">
      <div className="container">
        <div className="wrapper flexitem">
          <Link href="#" className="trigger desktop-hide">
            <i className="ri-menu-2-line" />
          </Link>
          <div className="left flexitem">
            <div className="logo">
              <Link href="#">
                <span className="circle" />
                .HoangFG
              </Link>
            </div>
            <nav className="mobile-hide">
              <ul className="flexitem second-links">
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                {filterMenus &&
                  filterMenus
                    .slice(0, 5)
                    .map((item) => <Menu item={item} menus={menus} />)}
              </ul>
            </nav>
          </div>
          <div className="right">
            <ul className="flexitem second-links">
              <li className="mobile-hide">
                <Link href="#">
                  <div className="icon-large">
                    <i className="ri-heart-line" />
                  </div>
                  <div className="fly-item">
                    <div className="item-number">0</div>
                  </div>
                </Link>
              </li>
              <li className="iscart">
                <Link href="#">
                  <div className="icon-large">
                    <i className="ri-shopping-cart-line" />
                    <div className="fly-item">
                      <div className="item-number">5</div>
                    </div>
                  </div>
                  <div className="icon-text">
                    <div className="mini-text">Total</div>
                    <div className="cart-total">$1.622</div>
                  </div>
                  <MiniCart></MiniCart>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  menus: state.menuReducer.menus,
  isLoading: state.commonReducer.isLoading,
});

const mapDispatchToProps = {
  getMenus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TopMenu));
