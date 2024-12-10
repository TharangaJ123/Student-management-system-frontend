import React,{useState} from "react";
import axios from "axios";

function AddStudent(){


  //create state
  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");


  function sendData(e){
    e.preventDefault();

    const newStudent = {
      name,
      age,
      gender
    }

    axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
      alert("New Student Added.")
    }).catch((err)=>{
      alert(err);
    })

    console.log(newStudent)
  }


  return(

    <form className="container" onSubmit={sendData}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e)=>{
          setName(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="text" className="form-control" id="age" placeholder="Age" onChange={(e)=>{
          setAge(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="gender" placeholder="Gender" onChange={(e)=>{
          setGender(e.target.value);
        }}/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )

}

export default AddStudent;