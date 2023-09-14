import React, { useState, useEffect } from "react";

function ProductList() {
  console.log("ProductList component rendered");
  const [products, setProducts] = useState([]);

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

  return (
    <div className="flex flex-wrap -mx-4">
      {products.map((product) => (
        <div
          key={product._id}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
        >
          <div className="relative flex flex-col bg-white z-20 md:p-8 p-6 rounded-md shadow-lg">
            <div className="mt-2">
              <h3 className="font-medium capitalize">{product.title}</h3>
            </div>
            <img
              src={`http://localhost:3002/images/${product.image}`}
              height={200}
              width={200}
              alt=""
              className="cursor-pointer w-80 h-60 object-cover rounded-lg"
            />

            <p className="text-xs mb-2 line-clamp-2 text-gray-500 link">
              {product.description}
            </p>
            <div className="mb-5 mt-2 font-bold text-gray-700 flex items-center justify-between">
              <span className="mr-2">€{product.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
