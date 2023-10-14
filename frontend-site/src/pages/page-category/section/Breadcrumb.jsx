import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb() {
  return (
    <ul class="flexitem">
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>Women</li>
    </ul>
  );
}
