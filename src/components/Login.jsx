import React, { useState } from "react";
import Header from "./Header";

export const Login = () => {
  const [isSignInForm, setisSignInform] = useState(true);
  const toogleSignInForm = () => {
    setisSignInform(!isSignInForm);
  };
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg" />
      </div>
      <form className="absolute p-12  w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? Sign Up Now"
            : "Alredy registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};
