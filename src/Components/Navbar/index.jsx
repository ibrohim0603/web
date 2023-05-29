import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";
import Links from "../Link/link";
import { Dropdown } from "@nextui-org/react";
import { instance } from "../../axios";
import { Product } from "../../context";

export default function Navbar() {
  const [selected, setSelected] = React.useState(new Set([]));
  const { tovar, setTovar } = useContext(Product);

  // setTovar(React.useMemo(() => Array.from(selected), [selected]));
  const [categ, setCateg] = useState([]);
  useEffect(() => {
    instance.get("/category").then((res) => setCateg(res?.data?.data));
  }, []);
  return (
    <div className={s.navbar}>
      <div className={s.navbar_links}>
        <Dropdown>
          <Dropdown.Button flat color="primary" css={{ tt: "capitalize" }}>
            <Links
              text={"Categories"}
              color={"black"}
              textDecoration={"none"}
              hover
              href={"#!"}
            />
          </Dropdown.Button>
          <Dropdown.Menu
            aria-label="Multiple selection actions"
            color="primary"
            disallowEmptySelection
            selectionMode="multiple"
            selectedKeys={selected}
            onSelectionChange={setSelected}
          >
            {categ?.map((e) => {
              return <Dropdown.Item key={e?.id}>{e?.name_Ru}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
        <NavLink to={"/products"}>
          <Links
            text={"All products"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
        <NavLink to={"/discount"}>
          <Links
            text={"Discount products"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
        <NavLink to={"/about"}>
          <Links
            text={"About us"}
            color={"black"}
            textDecoration={"none"}
            hover
            href={"#!"}
          />
        </NavLink>
      </div>
    </div>
  );
}
