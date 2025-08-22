import React from "react";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 relative flex justify-center items-center px-6">
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[40rem] h-[40rem] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"></div>

      {/* Glassmorphic Register Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center tracking-wide drop-shadow-lg">
          📝 Register
        </h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-xl border border-white/30 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
        />

        {/* Register Button */}
        <button className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 shadow-lg shadow-green-500/50 hover:from-green-500 hover:to-green-700 transition-all duration-300">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;