import React, { useState, useEffect } from "react";
import SearchBar from "../Header/SearchBar";
import InfluencerCard from "../InfluencerCard/InfluencerCard";
import influencersData from "../../data/influencers.json";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    setInfluencers(influencersData);
  }, []);

  const filteredInfluencers = influencers.filter((inf) =>
    inf.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "20px" }}>Influencer Dashboard</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {filteredInfluencers.map((inf) => (
          <InfluencerCard key={inf.id} influencer={inf} />
        ))}
      </div>
    </div>
  );
}
