import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search influencers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "250px",
          fontSize: "14px",
        }}
      />
      <select
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "14px",
        }}
      >
        <option value="">All Platforms</option>
        <option value="Instagram">Instagram</option>
        <option value="YouTube">YouTube</option>
        <option value="TikTok">TikTok</option>
      </select>
    </div>
  );
}
