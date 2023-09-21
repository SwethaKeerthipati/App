import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        // Handle successful login, e.g., store user information in state or localStorage
        console.log("Login successful");
        console.log("User data:", userData);
      } else {
        const errorData = await response.json();
        // Handle login failure, e.g., display an error message to the user
        console.error("Login failed");
        console.error("Error data:", errorData);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    }
  };

  return (
    <div
      className=" fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('foods.jpg')" }}
    >
      <div className="wrapper bg-transparent border-2 border-white bg-opacity-20 backdrop-blur-md shadow-md text-white rounded-2xl p-4 sm:p-8 w-80 sm:w-96 md:w-120 lg:w-144">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-6">
          Hello
        </h1>
        <form onSubmit={handleLogin}>
          <div className="input-box relative w-full mt-4 sm:mt-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-md p-1 text-white text-sm sm:text-base pl-4"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <box-icon
              name="envelope"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl"
            />
          </div>
          <div className="input-box relative w-full mt-4 sm:mt-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-md p-1 text-white text-sm sm:text-base pl-4"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <box-icon
              name="lock-alt"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl"
            />
          </div>
          <div className="flex justify-between text-sm sm:text-base mt-2 sm:mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="accent-color mr-1" />
              Remember me
            </label>
            <button
              type="button"
              className="text-white underline hover:no-underline focus:underline"
            >
              Forgot Password ?
            </button>
          </div>
          <button
            type="submit"
            className="btn bg-white text-black border-none outline-none rounded-3xl shadow-md cursor-pointer text-lg sm:text-xl font-semibold py-2 mt-4 sm:mt-6 w-full"
          >
            Login
          </button>
        </form>
        <div className="register-link text-sm sm:text-base text-center mt-4 sm:mt-5">
          <p>
            Don't have an account?{" "}
            <a
              href="signup"
              className="text-white hover:underline font-semibold"
            >
              SignUp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
