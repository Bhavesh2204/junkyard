import { useEffect, useState } from "react";
import "../../../App.css";

function LoginPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div>
        <button
          onClick={toggleDarkMode}
          className="absolute top-5 right-5 p-2 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-200"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 rounded-lg">
      <div className="flex max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="hidden md:flex md:w-1/2 items-center justify-center bg-orange-500 text-white p-10 rounded-l-lg">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                Simplify management with our dashboard.
              </h2>
              <p className="text-lg">
                Simplify your e-commerce management with our user-friendly admin
                dashboard.
              </p>
            </div>
          </div>
          <div className="flex-1 p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-700 dark:text-white">
              Welcome Back
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="flex items-center justify-between">
                <a href="#" className="text-sm text-orange-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <hr className="w-full border-t border-gray-300 dark:border-gray-600" />
                <span className="px-3 text-gray-500 dark:text-gray-300">
                  Or Login with
                </span>
                <hr className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="flex mt-6 space-x-4">
                <button className="flex-1 py-3 border bg-white border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
                  <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    className="h-5 mx-auto"
                  />
                </button>
                <button className="flex-1 py-3 border bg-white border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700">
                  <img
                    src="https://www.svgrepo.com/show/157818/facebook.svg"
                    alt="Facebook"
                    className="h-5 mx-auto"
                  />
                </button>
              </div>
              <p className="mt-6 text-center text-gray-500 dark:text-gray-300">
                Don't have an account?{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
