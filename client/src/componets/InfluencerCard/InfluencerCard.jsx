import React from "react";

export default function InfluencerCard({ influencer }) {
  // Grab the first letter of their name
  const initial = influencer.name.charAt(0).toUpperCase();

  // You can randomly assign background colors or based on category
  const colors = ["#FF6B6B", "#4ECDC4", "#5567FF", "#FFA500", "#9B59B6"];
  const bgColor = colors[influencer.name.length % colors.length]; // pseudo-random pick

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        padding: "15px",
        width: "250px",
        textAlign: "center",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {/* Avatar Circle */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 10px",
          color: "white",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        {initial}
      </div>

      {/* Influencer Info */}
      <h3 style={{ margin: "5px 0" }}>{influencer.name}</h3>
      <p style={{ margin: "0", color: "#777" }}>{influencer.username}</p>
      <p style={{ fontSize: "14px", margin: "6px 0" }}>
        {influencer.platform} | {influencer.category}
      </p>
      <p style={{ fontSize: "13px", color: "#333" }}>
        Followers: <strong>{influencer.followers.toLocaleString()}</strong>
      </p>
      <p style={{ fontSize: "13px", color: "#333" }}>
        Engagement: <strong>{influencer.engagement_rate}%</strong>
      </p>

      {/* Button */}
      <button
        style={{
          marginTop: "10px",
          backgroundColor: "#1E1E2F",
          color: "white",
          border: "none",
          borderRadius: "8px",
          padding: "8px 15px",
          cursor: "pointer",
        }}
      >
        View Profile
      </button>
    </div>
  );
}
