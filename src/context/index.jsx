import { createContext, useState } from "react";

export const Product = createContext();

export const ProductProvider = ({ children }) => {
  const [tovar, setTovar] = useState([]);
  return (
    <Product.Provider value={{ tovar, setTovar }}>{children}</Product.Provider>
  );
};
