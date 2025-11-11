import React from "react";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1E1E2F",
        color: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ margin: 0 }}>InfluenceIQ</h2>
      <nav>
        <a href="#" style={{ color: "#ddd", marginRight: "20px" }}>Dashboard</a>
        <a href="#" style={{ color: "#ddd" }}>Compare</a>
      </nav>
    </header>
  );
}
