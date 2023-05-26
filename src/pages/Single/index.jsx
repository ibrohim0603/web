import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { instance } from "../../axios";
import { useParams } from "react-router-dom";

export default function Single() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    instance.get(`/products/${id}`).then((res) => setProducts(res?.data));
    instance.get(`/products/${id}`).then((res) => setPrice(res?.data?.price));
  }, [id]);
  console.log(price);
  function plus() {
    setPrice(Number(price) + products?.price);
    setCounter(counter + 1);
  }
  function minus() {
    if (counter > 1 && price > 0) {
      setPrice(Number(price) - products?.price);
      setCounter(counter - 1);
    }
  }
  return (
    <div className={s.single}>
      <div className={s.single_grid}>
        <div className={s.single_img}>
          <img
            src={`http://3.138.204.20/upload/${products?.photo?.path}`}
            alt={products?.description_Ru}
          />
        </div>
        <div className={s.single_flex}>
          <div className={s.single_price}>
            <h5> Название продукта :</h5>
            <h2> {products?.name_Ru}</h2>
            <h4>Категория : {products?.Category?.name_Ru}</h4>
            <div className={s.price}>
              {" "}
              <h4>Цена : </h4>$<h3>{products?.price}</h3>
              <span> $ {products?.discount}</span>
            </div>
          </div>
          <div className={s.single_des}>
            <h5> Описание </h5>
            <h4>{products?.description_Ru}</h4>
          </div>
          <div className={s.single_info}>
            <h5> Информация</h5>
            <h3>Цвет : {products?.color}</h3>
            <h3>Для : {products?.gender}</h3>
            <h3> Размер : {products?.size}</h3>
            <h3> Номер продукта : {products?.id}</h3>
          </div>
          <div className={s.single_gap}>
            <div className={s.single_buy}>
              <h4>
                {" "}
                Название продукта : {products?.name_Ru} <span>x{counter}</span>
              </h4>
              <h4> Цена : $ {products?.price}</h4>
            </div>
            <div className={s.single_btn}>
              <div className={s.btns}>
                <button onClick={() => minus()}>-</button>
                <h3>{counter}</h3>
                <button onClick={() => plus()}>+</button>
              </div>
              <div className={s.buy}>
                <button>
                  <p>Add to Cart</p> | <p> ${price}</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
