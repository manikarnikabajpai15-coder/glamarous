import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");

  const addStudent = () => {
    if (name && branch) {
      setStudents([
        ...students,
        {
          id: Date.now(),
          name,
          branch
        }
      ]);

      setName("");
      setBranch("");
    }
  };

  const deleteStudent = (id) => {
    setStudents(
      students.filter(
        (student) => student.id !== id
      )
    );
  };

  return (
    <div>
      <h1>Student Management System</h1>

      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Branch"
        value={branch}
        onChange={(e) =>
          setBranch(e.target.value)
        }
      />

      <button onClick={addStudent}>
        Add Student
      </button>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {student.branch}

            <button
              onClick={() =>
                deleteStudent(student.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;