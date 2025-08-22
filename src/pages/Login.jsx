import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react"; // healthcare icon (needs: npm install lucide-react)

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative overflow-hidden">
      {/* Futuristic background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Glassmorphism Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-10 w-96 text-center">
        {/* Logo / Branding */}
        <div className="flex flex-col items-center mb-6">
          <div className="p-3 bg-blue-600 rounded-full shadow-lg mb-2">
            <Stethoscope className="text-white w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Health<span className="text-green-300">Care+</span>
          </h1>
          <p className="text-gray-200 text-sm mt-1">Secure Patient Portal</p>
        </div>

        {/* Login Form */}
        <h2 className="text-xl font-semibold text-white mb-6">
          Sign in to Continue
        </h2>
        <input
          type="email"
          placeholder="Email address"
          className="mb-4 px-4 py-3 w-full rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-6 px-4 py-3 w-full rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:ring-2 focus:ring-green-300 outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Login
        </button>

        {/* Extra Links */}
        <div className="flex justify-between mt-4 text-sm text-gray-200">
          <button className="hover:text-green-300 transition">Forgot Password?</button>
          <button className="hover:text-green-300 transition">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default Login;