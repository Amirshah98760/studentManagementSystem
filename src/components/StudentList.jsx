import "../App.css";
import StudentTable from "./StudentTable";

function StudentList({ students, setStudents }) {
  return (
    <>
      <h1 style={{marginBottom:'20px'}}>Student List</h1>
      <StudentTable students={students} setStudents={setStudents} />
    </>
  );
}

export default StudentList;