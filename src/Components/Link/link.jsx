import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

export default function Links({
  width,
  text,
  color,
  uppercase,
  fsize,
  fweight,
  align,
  href,
  fontFamily,
  textDecoration,
  hover,
}) {
  return (
    <>
      <span
        className={`${hover ? s.hover : ""}`}
        href={href}
        style={{
          color: color,
          textTransform: uppercase,
          fontSize: fsize,
          fontWeight: fweight,
          textAlign: align,
          width: `${width}%`,
          fontFamily: fontFamily,
          textDecoration: textDecoration,
        }}
      >
        {text}
      </span>
    </>
  );
}
