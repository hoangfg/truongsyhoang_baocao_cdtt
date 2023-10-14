import React from "react";
import FooterNewLater from './footer/FooterNewLater';
import FooterWidget from './footer/FooterWidget';
import FooterInfo from './footer/FooterInfo';


export default function Footer() {
  return (
    <footer>
      <FooterNewLater></FooterNewLater>
      <FooterWidget></FooterWidget>
      <FooterInfo></FooterInfo>
    </footer>
  );
}
