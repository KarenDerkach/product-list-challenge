import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Containers/Products/Products";
import CreateProduct from "./Containers/Products/CreateProduct";
import Footer from "./Containers/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Products />} />
        <Route path="/newproduct" element={<CreateProduct />} />
      </Routes>
      <Routes>
        <Route path="*" element={<Footer />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
