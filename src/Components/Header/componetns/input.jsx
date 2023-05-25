import React from "react";
import { FaSearch } from "react-icons/fa";
import s from "./style.module.scss";

export default function Input() {
  return (
    <div className={s.input}>
      <form>
        <input type="text" placeholder="search" />
        <div className={s.icon}>
          <FaSearch />
        </div>
      </form>
    </div>
  );
}
