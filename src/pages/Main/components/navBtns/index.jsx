import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";

export default function NavBtns() {
  return (
    <div className={s.btns}>
      <NavLink to={"/"}>Best Seller</NavLink>
      <NavLink to={"/discount"}>Bundles & Promotions</NavLink>
      <NavLink to={"/allproducts"}>On Sale</NavLink>
    </div>
  );
}
