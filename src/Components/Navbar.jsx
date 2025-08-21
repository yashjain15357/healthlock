import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="font-bold">HealthLock</h1>
      <div>
        <Link to="/dashboard" className="px-3">Dashboard</Link>
        <Link to="/doctor" className="px-3">Doctor</Link>
        <Link to="/consent" className="px-3">Consent</Link>
        <Link to="/" className="px-3">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
