import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// context provider
import { ThemeProvider } from "./context/ThemeContext";
//local imports
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import CheckOutPage from "./pages/CheckOutPage";

//layout
import layout from "./hoc/Layout";

const HomePageComponent = layout(HomePage);
const ProductPageComponent = layout(ProductPage);
const CheckOutComponent = layout(CheckOutPage);

// const
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Authentication Page */}
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Main layout */}
          <Route exact path="/" element={<HomePageComponent />} />
          <Route path="/products" element={<ProductPageComponent />} />
          <Route path="/checkout" element={<CheckOutComponent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
