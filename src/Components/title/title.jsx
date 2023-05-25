import React from "react";
import Text from "../Text/text";
import Button from "../button/button";
import Image from "../image/img";
import s from "./style.module.scss";

export default function Title({ text }) {
  return (
    <div className={s.title}>
      <div className={s.title_title}>
        <div className={s.title_name}>
          <Text
            text={text}
            color={"#413E52"}
            uppercase={"uppercase"}
            fsize={14}
            fontFamily={"Inter"}
            fweight={400}
          />
        </div>
        <div className={s.title_flex}>
          <Button
            text={"View All"}
            color={"#413E52"}
            fsize={14}
            fweight={400}
            bg={"transparent"}
            border={"none"}
            uppercase={"unset"}
            width={"10"}
            height={10}
          />
          <Image src={"/assets/arrow-right.svg"} />
        </div>
      </div>
    </div>
  );
}
