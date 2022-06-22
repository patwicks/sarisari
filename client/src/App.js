import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// context provider
import { ThemeProvider } from "./context/ThemeContext";

//local imports
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckOutPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

// const
const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Authentication Page */}
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* test new Layout */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
