import './App.css';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white' }}>
        Student Portfolio
      </h1>

      <AddStudent />
      <ViewStudents />
    </div>
  );
}

export default App;