import { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: ''
  });

  const handleChange = (e) => {
    setStudent({...student, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/student/add', student);
    alert("Student Added");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input name="name" placeholder="Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="course" placeholder="Course" onChange={handleChange} /><br />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddStudent;