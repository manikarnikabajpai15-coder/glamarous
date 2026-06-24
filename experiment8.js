import React, { useState } from "react";

function App() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setMessage("Invalid Email");
      return;
    }

    if (password.length < 6) {
      setMessage(
        "Password must contain at least 6 characters"
      );
      return;
    }

    setMessage("Registration Successful");
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={validate}>
        Register
      </button>

      <h3>{message}</h3>
    </div>
  );
}

export default App;