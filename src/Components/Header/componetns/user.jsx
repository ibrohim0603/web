import React from "react";
import s from "./style.module.scss";
import { CiShoppingBasket } from "react-icons/ci";

export default function User() {
  return (
    <div className={s.user}>
      Your Account
      <div className={s.cart}>
        <CiShoppingBasket fontSize={30} />
      </div>
    </div>
  );
}
