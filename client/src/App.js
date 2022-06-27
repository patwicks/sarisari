import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//local imports
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckOutPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
// products
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import DeleteProductPage from "./pages/DeleteProductPage";

// const
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication Page */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Home */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        {/* products routes */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/add" element={<AddProductPage />} />
        <Route path="/products/edit/:productID" element={<EditProductPage />} />
        <Route
          path="/products/delete/:productID"
          element={<DeleteProductPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
