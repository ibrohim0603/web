import React from "react";
import s from "./style.module.scss";
import logo from "../../assets/logos/white-logo.png";
import { Link, useLocation } from "react-router-dom";
import About from "../../pages/About";

export default function Footer() {
  const name = useLocation();
  return (
    <div className={s.footer}>
      {name.pathname === "/about" ? "" : <About />}
      <div className={s.footer_flex}>
        <div className={s.footer_logo}>
          <div className={s.footer_img}>
            <img src={logo} alt="" />
          </div>
          <div className={s.footer_info}>
            <h4>
              Наш магазин сувениров - это семейный бизнес, который успешно
              работает уже более 15 лет. Мы специализируемся на эксклюзивных
              сувенирах, которые отражают дух и культуру нашего региона. У нас
              вы найдете разнообразный ассортимент сувениров, от классических до
              уникальных авторских работ.
            </h4>
          </div>
        </div>
        <div className={s.footer_links}>
          <div className={s.footer_link}>
            <h2>Быстрые ссылки</h2>
            <Link to={"/products"}>All products</Link>
            <Link to={"/category"}>All categorys</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact Us</Link>
          </div>
          <div className={s.footer_link}>
            <h2>Cвязаться с нами</h2>
            <a href="globus"> globusouvenir@gmail.com</a>
            <a href="globus"> education0603@gmail.com</a>
          </div>
        </div>
      </div>

      <div className={s.footer_rights}>
        <div>
          <h4>© 2023 Top Shelf BC. All Rights Reserved. </h4>
        </div>
      </div>
    </div>
  );
}
