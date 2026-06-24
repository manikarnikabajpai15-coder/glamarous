import React, { useState } from "react";

function App() {
  const [feedback, setFeedback] =
    useState("");

  const submit = () => {
    alert(
      "Feedback Submitted Successfully"
    );
  };

  return (
    <div>
      <h1>Feedback Form</h1>

      <textarea
        rows="5"
        cols="30"
        onChange={(e) =>
          setFeedback(e.target.value)
        }
      />

      <br />

      <button onClick={submit}>
        Submit
      </button>

      <h3>{feedback}</h3>
    </div>
  );
}

export default App;