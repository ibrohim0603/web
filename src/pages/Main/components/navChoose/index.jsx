import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { instance } from "../../../../axios";
import s from "./style.module.scss";

export default function NavChoose() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get("/category")
      .then((res) => setProducts(res?.data?.data.slice(0, 4)));
  }, []);

  console.log(products);
  return (
    <div className={s.btns}>
      <h2>Filter by Interest</h2>
      {products?.map((e) => {
        return (
          <div className={s.btns}>
            <NavLink to={"/category"}>{e?.name_Ru}</NavLink>
          </div>
        );
      })}
    </div>
  );
}
