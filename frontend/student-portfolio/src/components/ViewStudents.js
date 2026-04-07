import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/student/view')
      .then(res => setStudents(res.data));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {students.map((s) => (
        <div className="student-card" key={s._id}>
  <h3>{s.name}</h3>
  <p>{s.email}</p>
  <p>{s.course}</p>
</div>
      ))}
    </div>
  );
}

export default ViewStudents;