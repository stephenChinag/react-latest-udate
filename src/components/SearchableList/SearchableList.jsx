import React, { useState } from "react";

export default function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  //   function handleChange(e) {
  //     setSearchTerm(e.target.value);
  //   }
  return (
    <div className="searchable-list">
      <input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{item.toString()}</li>
        ))}
      </ul>
    </div>
  );
}
