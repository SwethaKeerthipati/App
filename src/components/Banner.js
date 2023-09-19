import React from "react";

const Banner = ({ backgroundImage }) => {
  const bannerStyle = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <div
      className="bg-cover bg-center h-64 md:h-96 text-white relative"
      style={bannerStyle}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Welcome Back!
        </h1>
        <p className="text-lg md:text-xl text-center">
          Experience the Authentic Flavors of South Indian Cuisine
        </p>
        {/* <a
          href="/menu"
          className="mt-6 bg-pink-500 hover:bg-blue-400 px-5 py-2 rounded-xl text-lg font-semibold transition duration-300 ease-in-out"
        >
          View Menu
        </a> */}
      </div>
    </div>
  );
};

export default Banner;
