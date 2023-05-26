import React from "react";
import "./style.scss";
import Button from "../button/button";
import prod from "../../assets/Group 20.svg";
import info1 from "../../assets/info.svg";
import info2 from "../../assets/info-2.svg";

export default function Showcase() {
  return (
    <div className="showcase">
      <div className="banner">
        <div className="flex">
          <div className="showcase_info">
            <div className="showcase_flex">
              <div className="showcase_text">
                <h4>BEST SELLER</h4>
                <h4>Souverirs & Surpise</h4>
                <h1>Buy a quality product AND in the right place</h1>
              </div>
              <div className="showcase_dis">
                <h4>Get 25% off</h4>
                <h4>Free Shipping</h4>
              </div>
              <div className="showcase_btn">
                <Button
                  br={"20"}
                  border={"1px solid #FAFAFA"}
                  bg={"#648a7c"}
                  text={"Shop All"}
                  color={"inherit"}
                  textTransform={"lowerCase"}
                  fsize={18}
                >
                  Shop All
                </Button>
              </div>
            </div>
          </div>
          <div className="showcase_products">
            <img src={prod} alt="" />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info_size">
          <div className="info_flex">
            <div className="info_card">
              <div>
                <img src={info1} alt="" />
              </div>

              <div className="info_text">
                <h4>Reliable Shipping</h4>
                <p>
                  Green Society provides Canada Post Xpress Shipping right to
                  your doorstep! You can also opt in for shipping insurance. For
                  orders over $149, shipping is free!
                </p>
              </div>
            </div>
            <div></div>
            <div className="info_card">
              <div>
                <img src={info2} alt="" />
              </div>
              <div className="info_text">
                <h4>Reliable Shipping</h4>
                <p>
                  Green Society provides Canada Post Xpress Shipping right to
                  your doorstep! You can also opt in for shipping insurance. For
                  orders over $149, shipping is free!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
