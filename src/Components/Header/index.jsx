import React from "react";
import Input from "./componetns/input";
import s from "./componetns/style.module.scss";
import User from "./componetns/user";
import Image from "../image/img";

export default function Header() {
  return (
    <div className={s.header}>
      <a href="/">
        <Image
          src={"/assets/logos/white-logo.png"}
          width={"200px"}
          height={"120px"}
        />
      </a>
      <Input />
      <User />
    </div>
  );
}
