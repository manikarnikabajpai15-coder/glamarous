import React, { useState } from "react";

function App() {
  const [employees, setEmployees] =
    useState([]);

  const [employee, setEmployee] =
    useState({
      name: "",
      department: "",
      salary: ""
    });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]:
        e.target.value
    });
  };

  const addEmployee = () => {
    setEmployees([
      ...employees,
      employee
    ]);

    setEmployee({
      name: "",
      department: "",
      salary: ""
    });
  };

  return (
    <div>
      <h1>Employee Management</h1>

      <input
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      {employees.map((emp, index) => (
        <div key={index}>
          <h3>{emp.name}</h3>
          <p>{emp.department}</p>
          <p>{emp.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default App;