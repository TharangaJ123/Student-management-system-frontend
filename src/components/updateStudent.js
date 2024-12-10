import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateStudent(){

  const {id} = useParams();
  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const[gender,setGender] = useState("");

  //fetch the student details
  useEffect(()=>{
    axios.get('http://localhost:8070/student/get/'+id).then((res) => {
      console.log(res);
      setName(res.data.name);
      setAge(res.data.age);
      setGender(res.data.gender);
      
    }).catch((err)=>{
      alert(err);
    })
  },[id]);


  function updateData(e){
    e.preventDefault();

    const updateStudent = {
      name,
      age,
      gender
    }

    axios.put(`http://localhost:8070/student/updateStudent/${id}`,updateStudent).then(()=>{
      alert("Student updated successfully.");
      window.location.href="/";
    }).catch((err)=>{
      alert(err);
    })

    console.log(updateStudent)
  }


  return(

    <form className="container" onSubmit={updateData}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={name} placeholder="Enter name" onChange={(e)=>{
          setName(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="text" className="form-control" id="age" placeholder="Age" value={age} onChange={(e)=>{
          setAge(e.target.value);
        }}/>
      </div>

      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="gender" placeholder="Gender" value={gender} onChange={(e)=>{
          setGender(e.target.value);
        }}/>
      </div>

      <button type="submit" className="btn btn-primary">Update</button>
    </form>

  )

}

export default UpdateStudent;