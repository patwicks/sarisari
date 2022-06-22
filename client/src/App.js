import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//local imports
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckOutPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import AddProductPage from "./pages/AddProductPage";
// const
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Page */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* test new Layout */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/products/add" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
