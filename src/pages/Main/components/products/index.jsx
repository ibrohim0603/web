import React, { useEffect, useState } from "react";
import NavBtns from "../navBtns";
import s from "./style.module.scss";
import { Carousel } from "antd";
import { instance } from "../../../../axios";
import seller from "../../../../assets/images.png";
import { Link } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get("/products")
      .then((res) => setProducts(res?.data?.data.slice(-8)));
  }, []);

  return (
    <div className={s.card}>
      <div>
        <NavBtns />
      </div>
      <div className={s.flex}>
        <div className={s.flex_card}>
          <img src={seller} alt="" />
          <h3>Shop our Best Sellers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.{" "}
          </p>
          <button>View All</button>
        </div>
        <div className="card">
          <Carousel autoplay>
            {products?.map((e) => {
              return (
                <div className={s.card_flex} key={e?.id}>
                  <Link to={`/single/${e?.id}`}>
                    <div className={s.card_img}>
                      {e?.active === false ? <span>нет в наличии</span> : ""}
                      <img
                        id={s.img}
                        src={`http://3.138.204.20/upload/${e?.photo?.path}`}
                        alt={e.name}
                        className="w-6 shadow-2"
                      />
                    </div>
                    <div className={s.card_info}>
                      <h4>{e?.name_Uz}</h4>
                      <h5>{e?.description_En}</h5>
                      <br />
                      <h2>
                        ${e?.price} <span> ${e?.discount}</span>
                      </h2>
                      <button>Add to Cart</button>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
