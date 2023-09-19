import React, { useState, useEffect } from "react";
import Categories from "../Categories";

function ProductList() {
  console.log("ProductList component rendered");
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // State to track quantities for each product
  const [productQuantities, setProductQuantities] = useState({});

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (product, quantity) => {
    // Add the selected product to the cart with the specified quantity
    const updatedProduct = { ...product, quantity };
    setCart([...cart, updatedProduct]);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Update the quantity for the specified product
    setProductQuantities({ ...productQuantities, [productId]: newQuantity });
  };

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((response) => {
        if (!response.ok) {
          console.error("Response status:", response.status);
          console.error("Response text:", response.statusText);
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // Define filteredProducts here
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Categories onSelectCategory={handleCategorySelect} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-3">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`http://localhost:3002/images/${product.image}`}
              alt=""
              className="w-full h-48 object-cover md:h-64"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex ml-4 justify-between items-center">
                <p className="text-lg font-bold text-gray-600">
                  €{product.price}
                </p>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        product._id,
                        productQuantities[product._id] - 1 || 1
                      )
                    }
                    className="bg-gray-100 text-black px-3 py-1 rounded-sm hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    -
                  </button>
                  <p className="mx-2">{productQuantities[product._id] || 1}</p>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        product._id,
                        productQuantities[product._id] + 1 || 1
                      )
                    }
                    className="bg-gray-100 text-black px-3 py-1 rounded-sm hover:bg-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product,
                      productQuantities[product._id] || 1
                    )
                  }
                  className="bg-blue-300 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
