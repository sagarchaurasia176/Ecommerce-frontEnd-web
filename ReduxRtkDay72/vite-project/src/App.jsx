import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import AddCart from "./Components/CartPage";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addcart" element={<AddCart />} />
        <Route path="/home" element={<AddCart />} />
      </Routes>
    </>
  );
}

export default App;
