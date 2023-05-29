import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

import Main from "./pages/Main";
import Single from "./pages/Single";
import Footer from "./Components/Footer";
import AllProduct from "./pages/AllProduct";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import Discount from "./pages/Discount";

function App() {
  return (
    <div>
      <div className="size90">
        <Header />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: "40vh",
                width: "90%",
                margin: " 5% auto",
                textAlign: "center",
              }}
            >
              <h1>Page Not Found 404</h1>
            </div>
          }
        />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/products" element={<AllProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
