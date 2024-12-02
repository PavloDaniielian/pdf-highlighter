import React, { useState } from "react";
import GeminiAPI from "../services/GeminiAPI";

const QueryForm = ({ onCoordinates }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const coordinates = await GeminiAPI.getBoundingBox(query);
    onCoordinates(coordinates); // Pass data to App.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter text to highlight"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Get Coordinates</button>
    </form>
  );
};

export default QueryForm;