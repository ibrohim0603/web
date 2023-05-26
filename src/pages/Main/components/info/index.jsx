import React from "react";
import s from "./style.module.scss";
import info1 from "../../../../assets/info-1.svg";
import info2 from "../../../../assets/info_2.svg";
import { Link } from "react-router-dom";

export default function Info() {
  return (
    <div className={s.info}>
      <div className={s.info_text}>
        <h1>how to buy a quality and good product</h1>
        <p>
          Ordering weed online from Top Shelf BC is easy. We are proud to have
          made the process accessible across multiple platforms and simple to
          understand, meaning that more people can come to us to buy their
          cannabis products online.
        </p>
      </div>
      <div className={s.info_card}>
        <img src={info1} alt="" />
        <img src={info2} alt="" />
      </div>
      <div className={s.info_btn}>
        <button>
          <Link to={"/products"}>Choose your Product</Link>
        </button>
      </div>
    </div>
  );
}
