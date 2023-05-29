import React, { useContext, useEffect, useState } from "react";
import s from "./style.module.scss";
import { instance } from "../../axios";
import { Link, useLocation } from "react-router-dom";
import { Product } from "../../context";

export default function AllProduct() {
  const { tovar, setTovar } = useContext(Product);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    instance
      .get(
        `${mal.pathname === "/discount" ? "/products/discount" : "/products"}`
      )
      .then((res) => setProducts(res?.data?.data));
  }, []);
  const mal = useLocation();

  const newArray = [];

  products.map((item, e = 0) => {
    e++;

    if (item?.categoryId === tovar[e]) {
      newArray.push(item);
    }
  });

  return (
    <div className={s.product}>
      <div className={s.choose}>
        {products?.map((e) => {
          return (
            <div className={s.choose_card} key={e?.id}>
              {e?.discount > 0 ? <h6>скидка</h6> : ""}
              <Link to={`/single/${e?.id}`}>
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
                    $ {e?.price}{" "}
                    {e?.discount > 0 ? (
                      <div>
                        {` | `}
                        <span> $ {e?.discount}</span>
                      </div>
                    ) : (
                      ""
                    )}
                  </h2>
                  <br />
                  <button>Add to Cart</button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
