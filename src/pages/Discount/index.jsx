import React from "react";
import s from "./style.module.scss";
import AllProduct from "../AllProduct";

export default function Discount() {
  return (
    <div className={s.discount}>
      <div>
        <AllProduct />
      </div>
    </div>
  );
}
