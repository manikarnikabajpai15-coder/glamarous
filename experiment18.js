import React, { useState } from "react";

function App() {
  const [weight, setWeight] =
    useState("");

  const [height, setHeight] =
    useState("");

  const bmi =
    weight && height
      ? (
          weight /
          ((height / 100) * (height / 100))
        ).toFixed(2)
      : 0;

  return (
    <div>
      <h1>BMI Calculator</h1>

      <input
        placeholder="Weight (kg)"
        onChange={(e) =>
          setWeight(e.target.value)
        }
      />

      <input
        placeholder="Height (cm)"
        onChange={(e) =>
          setHeight(e.target.value)
        }
      />

      <h2>BMI: {bmi}</h2>
    </div>
  );
}

export default App;