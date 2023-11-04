import React from "react";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

export default function Menu(props) {
  const menu = props.item;
  const menus = props.menus;
  
  const filterSubmenu = menus.filter(
    (menus) =>
      menus.status === 0 &&
      menus.parent_id === menu.id &&
      menus.position === "mainmenu"
  );

  return (
    <>
      <li className="has-child">
        <Link to={`/${menu?.link}`}>
          {menu.name}
          {filterSubmenu.length > 0 && (
            <div className="icon-small">
              <i className="ri-arrow-down-s-line" />
            </div>
          )}
        </Link>
        {filterSubmenu.length > 0 && (
          <SubMenu item={filterSubmenu} menus={menus} />
        )}
      </li>
    </>
  );
}
