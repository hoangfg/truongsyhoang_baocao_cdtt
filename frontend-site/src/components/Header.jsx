import React from "react";
import TopNav from './header/TopNav';
import TopMenu from './header/TopMenu/TopMenu';
import TopSearch from './header/TopSearch';



export default function Header() {
  return (
    <header>
      <TopNav></TopNav>
      <TopMenu></TopMenu>
      <TopSearch></TopSearch>
    </header>
  );
}
