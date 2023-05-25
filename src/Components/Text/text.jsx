import React from "react";

export default function Text({
  width,
  text,
  color,
  uppercase,
  fsize,
  fweight,
  align,
  fontFamily,
}) {
  return (
    <h1
      style={{
        color: color,
        textTransform: uppercase,
        fontSize: fsize,
        fontWeight: fweight,
        textAlign: align,
        width: `${width}%`,
        fontFamily: `${
          fsize > 20 ? `'Poppins', sans-serif` : `'Libre Franklin', sans-serif`
        }`,
      }}
    >
      {text}
    </h1>
  );
}
