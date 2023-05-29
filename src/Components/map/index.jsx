import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { instance } from "../../axios";

export default function Map() {
  const parse = require("html-react-parser");
  useEffect(() => {
    instance.get("/information").then((res) => setMap(res?.data?.data));
  }, []);
  const [map, setMap] = useState();
  return <div>{parse(`${map?.[0]?.addressMap}`)}</div>;
}
