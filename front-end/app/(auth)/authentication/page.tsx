"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Eye, EyeClosed } from "lucide-react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp,setIsSignUp]=useState(true)
  async function handleSignup() {
    if (username && email && password) {
      setLoading(true);
      try {
        const res = await axios.post(
          "https://cafe-menu-green.vercel.app/api/v1/userSignup",
          { username, email, password }
        );
        toast.success(res.data.message);
        if (res.data.message === "Successfully Signed Up") {
            console.log("Hi")
        }
      } catch (error) {
        toast.error("Signup failed. Please try again.");
        console.log(error)
      } finally {
        setLoading(false);
      }
    } else {
      if (!username) toast.warn("Username can't be empty");
      if (!email) toast.warn("Email can't be empty");
      if (!password) toast.warn("Password can't be empty");
    }
  }

  return (
    <>
      <ToastContainer />
      <Image
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1556742517-fde6c2abbe11?q=80&w=1974&auto=format&fit=crop"
        width={1000}
        height={1000}
        alt="Cafe Img"
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
        <div className="modal p-8 rounded-lg shadow-lg w-[90vw] max-w-md bg-white bg-opacity-80 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-primary dark:text-text">Sign Up</h2>
          <div className="mb-4">
            <p className="block text-sm font-semibold mb-2 text-primary dark:text-text">Username</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className={isSignUp?'block mb-4':"hidden"}>
            <p className="block text-sm font-semibold mb-2 text-primary dark:text-text">Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 relative">
            <p className="block text-sm font-semibold mb-2 text-primary dark:text-text">Password</p>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-3 top-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} color="#555" /> : <EyeClosed size={20} color="#555" />}
            </div>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? (isSignUp ? "Signing Up..." : "Logging In...") : isSignUp ? "Sign Up" : "Login"}
          </button>
          <p className="text-center mt-4 cursor-pointer text-blue-600" onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </p>
        </div>
      </div>
    </>
  );
}
