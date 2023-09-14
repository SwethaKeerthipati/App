import React from "react";
import "../src/styles/global.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/Products/ProductList";

function App() {
  const backgroundImageURL = "../image.jpg";
  return (
    <div className="App">
      <Navbar />
      <Banner backgroundImage={backgroundImageURL} />
      <ProductList />
    </div>
  );
}

export default App;
