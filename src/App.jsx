import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import LoginPopup from "./components/Loginpopup/loginpopup";
import PlaceOder from "./pages/PlaceOder/PlaceOder";
import Cart from "./pages/cart/Cart";

const App = () => {

  const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="oder" element={<PlaceOder />} />
        </Routes>
      </div>
  <Footer />
    </>
  );
};

export default App;
