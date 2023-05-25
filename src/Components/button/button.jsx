import React from "react";
import "./style.scss";

export default function Button({
  maxwidth,
  width,
  height,
  br,
  bg,
  border,
  color,
  text,
  fsize,
  fweight,
  uppercase,
  fontFamily,
}) {
  return (
    <div>
      <button
        style={{
          padding: `${height}px ${width}px`,
          backgroundColor: `${bg}`,
          color: color,
          borderRadius: `${br}px`,
          fontSize: fsize,
          fontWeight: fweight,
          fontFamily: fontFamily,
          border: border,
          textTransform: uppercase,
          width: maxwidth,
        }}
        className={`btn`}
      >
        {text}
      </button>
    </div>
  );
}
