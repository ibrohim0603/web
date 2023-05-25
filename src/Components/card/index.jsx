import React from "react";
import s from "./style.module.scss";
import Image from "../image/img";
import Text from "../Text/text";

export default function Card({
  src,
  width,
  width1,
  width2,
  width3,
  height,
  alt,
  text,
  text1,
  text3,
  text2,
  color,
  color1,
  color2,
  color3,
  uppercase,
  uppercase1,
  uppercase2,
  uppercase3,
  fsize,
  fsize1,
  fsize2,
  fsize3,
  fweight,
  align,
  fontFamily,
  border,
  twidth,
  nn,
  bg,
}) {
  return (
    <div className={s.card} style={{ backgroundColor: bg }} id="m">
      <div className={`${border ? s.br : ""}`}>
        <div className={`${nn ? s.card_nn : s.card_sh}`}>
          <Image src={`${src}`} width={width} alt={`${alt}`} />
        </div>
        <div className={s.card_text}>
          <Text
            text={`${text1 ? text1 : ""}`}
            color={color1}
            uppercase={uppercase}
            fsize={fsize1}
            fweight={fweight}
            align={align}
            width={twidth}
            fontFamily={fontFamily}
          />
          <Text
            text={`${text2 ? text2 : ""}`}
            color={color2}
            uppercase={uppercase}
            fsize={fsize2}
            fweight={fweight}
            align={align}
            width={twidth}
            fontFamily={fontFamily}
          />
          <Text
            text={`${text3 ? text3 : ""}`}
            color={color3}
            uppercase={uppercase}
            fsize={fsize3}
            fweight={fweight}
            align={align}
            width={twidth}
            fontFamily={fontFamily}
          />
        </div>
      </div>
    </div>
  );
}
