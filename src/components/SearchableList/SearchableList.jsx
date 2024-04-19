import React from "react";

export default function SearchableList({ items }) {
  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
