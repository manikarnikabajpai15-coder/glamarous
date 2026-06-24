import React, { useState } from "react";

function App() {
  const [birthYear, setBirthYear] =
    useState("");

  const age =
    birthYear
      ? new Date().getFullYear() -
        birthYear
      : "";

  return (
    <div>
      <h1>Age Calculator</h1>

      <input
        placeholder="Birth Year"
        onChange={(e) =>
          setBirthYear(e.target.value)
        }
      />

      <h2>Age: {age}</h2>
    </div>
  );
}

export default App;