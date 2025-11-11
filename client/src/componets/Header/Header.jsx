import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <h2 className="text-2xl font-bold">InfluenceIQ</h2>
      <nav className="space-x-4">
        {/* <Link to="/" className="hover:text-yellow-400">Home</Link> */}
        <Link to="/dashboard" className="hover:text-yellow-400">Dashboard</Link>
        {/* <Link to="/form" className="hover:text-yellow-400">Form</Link>
        <Link to="/details" className="hover:text-yellow-400">Details</Link> */}
        <Link to="/charts" className="hover:text-yellow-400">Charts</Link>
        <Link to="/compare" className="hover:text-yellow-400">Compare</Link>
      </nav>
    </header>
  );
}
