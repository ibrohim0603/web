import React from "react";
import Product from "./components/products";
import Text from "../../Components/Text/text";
import s from "./style.module.scss";
import Showcase from "../../Components/Showcase";
import Navbar from "../../Components/Navbar";
import ChoseProduct from "./components/chooseProducts";
import Info from "./components/info";

export default function Main() {
  return (
    <div>
      <div>
        <Navbar />
        <Showcase />
      </div>
      <div className={s.main}>
        <div style={{ margin: "5% 0" }}>
          <div>
            <Text text={"BEST SELLER"} align={"center"} />
          </div>
        </div>
        <Product />
        <div style={{ margin: "10% 0" }} id="title">
          <Text text={"CHOOSE YOUR PRODUCT"} align={"start"} fsize={"55px"} />
        </div>
        <ChoseProduct />
      </div>
      <Info />
      <div className={s.main}>
        <div style={{ margin: "10% 0" }} id="title">
          <Text text={"RECENTLY ADDED"} align={"start"} fsize={"55px"} />
        </div>
        <ChoseProduct />
      </div>
    </div>
  );
}
