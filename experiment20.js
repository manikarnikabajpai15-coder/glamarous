import React, { useState } from "react";

function App() {
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const [m3, setM3] = useState("");

  const total =
    Number(m1) + Number(m2) + Number(m3);

  const percentage = total / 3;

  return (
    <div>
      <h1>Result Calculator</h1>

      <input
        placeholder="Subject 1"
        onChange={(e) => setM1(e.target.value)}
      />

      <input
        placeholder="Subject 2"
        onChange={(e) => setM2(e.target.value)}
      />

      <input
        placeholder="Subject 3"
        onChange={(e) => setM3(e.target.value)}
      />

      <h2>Total: {total}</h2>
      <h2>Percentage: {percentage}%</h2>
    </div>
  );
}

export default App;