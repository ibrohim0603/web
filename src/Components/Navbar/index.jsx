import React from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";
import Links from "../Link/link";

export default function Navbar() {
  return (
    <div className={s.navbar}>
      <div className={s.navbar_links}>
        <NavLink to={"/products"}>
          <Links
            text={"All products"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
        <NavLink to={"/category"}>
          <Links
            text={"Categories"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
        <NavLink to={"/discount"}>
          <Links
            text={"Discount products"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
        <NavLink to={"/products"}>
          <Links
            text={"About us"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
      </div>
    </div>
  );
}
