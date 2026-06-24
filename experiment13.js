import React, { useState } from "react";

function App() {
  const employees = [
    "Rahul",
    "Amit",
    "Priya",
    "Neha"
  ];

  const [search, setSearch] =
    useState("");

  const filtered =
    employees.filter((emp) =>
      emp
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <div>
      <h1>Employee Search</h1>

      <input
        placeholder="Search Employee"
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <ul>
        {filtered.map((emp, i) => (
          <li key={i}>{emp}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;