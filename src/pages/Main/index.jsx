import React from "react";
import Product from "./components/products";
import Text from "../../Components/Text/text";
import s from "./style.module.scss";

export default function Main() {
  return (
    <div className={s.main}>
      <div style={{ margin: "5% 0" }}>
        <div>
          <Text text={"BEST SELLER"} align={"center"} />
        </div>
      </div>
      <Product />
    </div>
  );
}
