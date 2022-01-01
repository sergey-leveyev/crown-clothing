import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import Auto from "./pages/Auto/Auto";
import { createUserProfileDocument } from "./firebase/firebase.utils";

function App() {

  return (
    <div>
      {/* <h1>{localStorage.getItem("name")}</h1> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<Auto />} />
      </Routes>
    </div>
  );
}

export default App;
