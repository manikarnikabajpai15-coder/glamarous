import React, { useState } from "react";

function App() {
  const [expense, setExpense] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [expenses, setExpenses] =
    useState([]);

  const addExpense = () => {
    const newExpense = {
      expense,
      amount
    };

    setExpenses([
      ...expenses,
      newExpense
    ]);

    setExpense("");
    setAmount("");
  };

  const total = expenses.reduce(
    (sum, item) =>
      sum + Number(item.amount),
    0
  );

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        placeholder="Expense Name"
        value={expense}
        onChange={(e) =>
          setExpense(e.target.value)
        }
      />

      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button onClick={addExpense}>
        Add Expense
      </button>

      <h2>Total: ₹{total}</h2>

      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item.expense} - ₹
            {item.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;