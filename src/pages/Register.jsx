import React from "react";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 border rounded-lg shadow w-80">
        <h2 className="font-bold mb-4">Register</h2>
        <input type="text" placeholder="Name" className="border p-2 w-full mb-2" />
        <input type="email" placeholder="Email" className="border p-2 w-full mb-2" />
        <input type="password" placeholder="Password" className="border p-2 w-full mb-2" />
        <button className="bg-green-600 text-white w-full py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
