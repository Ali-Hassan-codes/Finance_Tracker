import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Existing components
import Header from "./componets/Header/Header";
import Dashboard from "./componets/Dashboard/Dashboard";

// Your previous components
import Navbar from "./componets/navbar";
import Form from "./componets/Form";
import Details from "./componets/Details";
import Charts from "./componets/Charts/Charts";
import Compare from "./componets/Compare/Compare";

export default function App() {
  return (
    <Router>
      {/* Navbar on top */}

      {/* Optional Header + Dashboard above routes */}
      <Header />
      {/* <Dashboard /> */}

      {/* Routes for pages */}
      <Routes>
        <Route
          path="/"
          element={
            <h1 className="text-center pt-10 text-3xl font-bold">
              Home Page
            </h1>
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details" element={<Details />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </Router>
  );
}