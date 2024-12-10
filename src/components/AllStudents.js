import React,{useState,useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";


export default function DisplayStudents(){

  //usage of useEffect

  const [students,setStudents] = useState([]);

  useEffect(()=>{
    function getStudents(){
      axios.get("http://localhost:8070/student/").then((res) => {
        setStudents(res.data);
      }).catch((err) => {
        alert(err);
      });
    }
    getStudents();
  },[])

  //delete data from DB
  const deleteStudent = (id,name) =>{
    axios.delete(`http://localhost:8070/student/deleteStudent/${id}`).then((res)=>{
      console.log(res.data); // Optional: log server response
      alert(`Student Deleted : ${name}`);
      window.location.href="/";
    }).catch((err)=>{
      alert(err);
    });
  }

  return(
    <div>
      <h1>All Students</h1>

      <div className="container">

          <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student)=>(
              <tr key={student.id}>
                <th scope="row">{student._id}</th>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.gender}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => deleteStudent(student._id,student.name)}>Delete Student</button></td>
                <td><Link to={`/updateStudent/${student._id}`} className="nav-link"><button type="button" className="btn btn-success">Edit</button></Link></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )

}