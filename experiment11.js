import React, { useState } from "react";

function App() {
  const [password, setPassword] =
    useState("");

  const strength =
    password.length < 6
      ? "Weak"
      : password.length < 10
      ? "Medium"
      : "Strong";

  return (
    <div>
      <h1>Password Checker</h1>

      <input
        type="password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <h2>Strength: {strength}</h2>
    </div>
  );
}

export default App;