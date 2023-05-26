import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { instance } from "../../../../axios";
import { Link } from "react-router-dom";
import NavChoose from "../navChoose";

export default function ChoseProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get("/products")
      .then((res) => setProducts(res?.data?.data.slice(0, 8)));
  }, []);

  return (
    <div>
      <NavChoose />
      <div className={s.choose}>
        {products?.map((e) => {
          return (
            <div className={s.choose_card} key={e?.id}>
              {e?.discount > 0 ? <h6>скидка</h6> : ""}
              <div className={s.choose_img}>
                {e?.active === false ? <span>нет в наличии</span> : ""}
                <img
                  src={`http://3.138.204.20/upload/${e?.photo.path}`}
                  alt=""
                />
              </div>
              <div className={s.choose_info}>
                <h5> Категория: {e?.Category.name_Ru}</h5>

                <h3>{e?.name_Ru}</h3>
                <p>{e?.type}</p>
                <h2>
                  {" "}
                  $ {e?.price} {` | `} <span> $ {e?.discount}</span>
                </h2>
                <br />
                <button>
                  <Link to={`/single/${e?.id}`}>Add to Cart</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
