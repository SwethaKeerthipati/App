import React, { useState } from "react";

function CategoryTags({ onSelectCategory }) {
  const categories = ["All", "Idly", "Dosa", "Others"]; // Define categories

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="category-tags flex space-x-4 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`${
            selectedCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          } px-4 py-2 rounded-lg focus:outline-none`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTags;
