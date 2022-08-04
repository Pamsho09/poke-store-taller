import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Cart from "../pages/Cart";
import Home from "../pages/Home";

const App = () => {
  return (
    <Layout>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
};

export default App;
