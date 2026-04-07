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
        <div key={s._id}>
          {s.name} - {s.email} - {s.course}
        </div>
      ))}
    </div>
  );
}

export default ViewStudents;