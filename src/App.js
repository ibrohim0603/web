import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Showcase from "./Components/Showcase";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <div className="size90">
        <Header />
      </div>
      <div className="header">
        <Navbar />
        <Showcase />
      </div>
      <div className="size90">
        <Main />
      </div>
    </div>
  );
}

export default App;
