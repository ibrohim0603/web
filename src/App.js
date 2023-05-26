import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

import Main from "./pages/Main";
import Single from "./pages/Single";
import Footer from "./Components/Footer";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <div>
      <div className="size90">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
