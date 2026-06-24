import React, { useState } from "react";

function App() {
  const [rupees, setRupees] =
    useState("");

  const dollars =
    (rupees / 83).toFixed(2);

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        placeholder="Rupees"
        onChange={(e) =>
          setRupees(e.target.value)
        }
      />

      <h2>
        Dollars: ${dollars}
      </h2>
    </div>
  );
}

export default App;