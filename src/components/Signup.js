import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    //   try {
    //     const response = await fetch("/api/user/signup", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ name, email, password, dateOfBirth }),
    //     });

    //     if (response.ok) {
    //       const userData = await response.json();
    //       // Handle successful signup, e.g., redirect to login page or display a success message
    //       console.log("Signup successful");
    //       console.log("User data:", userData);
    //     } else {
    //       const errorData = await response.json();
    //       // Handle signup failure, e.g., display an error message to the user
    //       console.error("Signup failed");
    //       console.error("Error data:", errorData);
    //     }
    //   } catch (error) {
    //     console.error("An error occurred during signup:", error);
    //   }
    // };
    // ...

    try {
      const response = await fetch("http://localhost:3002/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, dateOfBirth }),
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("Signup successful");
        console.log("User data:", userData);
      } else {
        const errorText = await response.text(); // Read the response as plain text
        console.error("Signup failed");
        console.error("Error text:", errorText);
      }
    } catch (error) {
      console.error("An error occurred during signup:", error);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0  flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('foods.jpg')" }}
    >
      <div className="wrapper bg-transparent border-2 border-white bg-opacity-20 backdrop-blur-md shadow-md text-white rounded-2xl p-4 sm:p-8 w-80 sm:w-96 md:w-120 lg:w-144 mt-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSignup}>
          <div className="input-box relative w-full mt-4 sm:mt-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-md p-1 text-white text-sm sm:text-base pl-4"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <box-icon
              name="user"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl"
            />
          </div>
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
          <div className="input-box relative w-full mt-4 sm:mt-6">
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full h-full bg-transparent border-2 border-white border-opacity-20 rounded-md p-1 text-white text-sm sm:text-base pl-4"
              required
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <box-icon
              name="calendar"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl sm:text-3xl"
            />
          </div>
          <button
            type="submit"
            className="btn bg-white text-black border-none outline-none rounded-3xl shadow-md cursor-pointer text-lg sm:text-xl font-semibold py-2 mt-4 sm:mt-6 w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="login-link text-sm sm:text-base text-center mt-4 sm:mt-5">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-white hover:underline font-semibold"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
