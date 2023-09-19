import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes and Route
import "../src/styles/global.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductList from "./components/Products/ProductList";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const backgroundImageURL = "../image.jpg";

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Use Routes instead of Switch */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <Banner backgroundImage={backgroundImageURL} />
                <ProductList />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
