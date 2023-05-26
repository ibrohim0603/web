import React from "react";
import s from "./style.module.scss";
import { CiShoppingBasket } from "react-icons/ci";

export default function User() {
  return (
    <div className={s.user}>
      <p>Your Account</p>
      <div className={s.cart}>
        <CiShoppingBasket fontSize={30} />
      </div>
    </div>
  );
}
