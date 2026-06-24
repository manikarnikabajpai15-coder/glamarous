import React, { useState } from "react";

function App() {
  const questions = [
    {
      question: "React is developed by?",
      options: [
        "Google",
        "Meta",
        "Microsoft"
      ],
      answer: "Meta"
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Home Tool Markup Language"
      ],
      answer:
        "Hyper Text Markup Language"
    }
  ];

  const [current, setCurrent] =
    useState(0);

  const [score, setScore] =
    useState(0);

  const checkAnswer = (option) => {
    if (
      option ===
      questions[current].answer
    ) {
      setScore(score + 1);
    }

    setCurrent(current + 1);
  };

  if (
    current === questions.length
  ) {
    return (
      <h1>
        Final Score: {score}
      </h1>
    );
  }

  return (
    <div>
      <h2>
        {
          questions[current]
            .question
        }
      </h2>

      {questions[current].options.map(
        (option, index) => (
          <button
            key={index}
            onClick={() =>
              checkAnswer(option)
            }
          >
            {option}
          </button>
        )
      )}
    </div>
  );
}

export default App;