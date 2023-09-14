import React, { useState } from "react";

function Categories({ onSelectCategory }) {
  const categories = ["All", "Idly", "Dosa", "Other"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex space-x-4 mb-4 ml-5">
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            selectedCategory === category
              ? "bg-blue-300 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 mx-4 mb-4 mt-6 py-2 rounded-md focus:outline-none`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;
