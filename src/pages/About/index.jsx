import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { useForm } from "react-hook-form";
import { instance } from "../../axios";
import Map from "../../Components/map";
import { Link, useLocation } from "react-router-dom";

export default function About() {
  const [num, setNum] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    postData({
      ...data,
      phone: `+${data.phone}`,
      status: "PENDING",
    });
  const postData = (data) => {
    instance.post("/message", data);
  };
  useEffect(() => {
    instance.get("/information").then((res) => setNum(res?.data?.data));
  }, []);
  const name = useLocation();

  return (
    <div className={s.about}>
      {name.pathname === "/about" ? (
        <div>
          <h1> Коротко о нас</h1>
          <div className={s.about_text}>
            <h3>
              Привет! Меня зовут ... и я уже более 15 лет занимаюсь торговлей
              сувенирами. Мой магазин предлагает широкий ассортимент сувениров,
              начиная от традиционных предметов искусства до современных
              подарков. Мы всегда следим за последними тенденциями и мировыми
              новинками, чтобы предложить нашим клиентам самые актуальные и
              интересные сувениры. Наш магазин сувениров — это не просто
              торговая точка, это место, где каждый найдет что-то для себя: от
              милых магнитиков и красивых открыток до эксклюзивных статуэток и
              уникальных предметов ручной работы. В нашем магазине Вы найдете
              сувениры, которые напомнят о Вашей поездке в определенную страну,
              памятники, которые станут символом Вашей любви, а также подарки,
              которые подходят для всех возрастов и вкусов. Спасибо за
              проявленный интерес к нашему магазину сувениров. Мы будем рады
              помочь Вам с выбором и поделиться знаниями. Ждем Вас в гости!
            </h3>
          </div>
        </div>
      ) : (
        <h1>Свяжитесь с нами</h1>
      )}

      <div className={s.about_form}>
        <div className={s.about_map}>
          <Map />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Номер
            {errors.phone?.type === "required" && (
              <p>{errors.phone?.message}</p>
            )}
            <input
              type="number"
              {...register("phone", {
                required: "Заполните это поле только цифрами",
              })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
          </label>

          <label>
            Тема
            {errors.subject?.type === "required" && (
              <p>{errors.subject?.message}</p>
            )}
            <textarea
              type="text"
              {...register("subject", {
                required: "Заполнение этой формы обязательно",
              })}
              aria-invalid={errors.subject ? "true" : "false"}
            />
          </label>

          <label>
            Сообщение
            {errors.message?.type === "required" && (
              <p>{errors.message?.message} </p>
            )}
            <textarea
              type="text"
              {...register("message", {
                required: "Заполнение этой формы обязательно",
              })}
              aria-invalid={errors.message ? "true" : "false"}
            />
          </label>

          <button type="submit"> Отправить...</button>
        </form>
      </div>

      <div className={s.about_tel}>
        <a href="email:email">
          <h3>Свяжитесь с нами по email : {num?.[0]?.email}</h3>
        </a>
        <div>
          {num?.map((e) => {
            return (
              <div key={e?.id} className={s.about_phone}>
                <a href="tel:#number" type="">
                  <h3>Позвоните нам : {e?.phone}</h3>
                </a>
              </div>
            );
          })}
        </div>
        <a href="instagram:instagram">
          <h3> Наш Instagram : {num?.[0]?.instagram}</h3>
        </a>

        <a href="telegram:telegram">
          <h3> Наш Telegram : {num?.[0]?.telegram}</h3>
        </a>
      </div>
    </div>
  );
}
