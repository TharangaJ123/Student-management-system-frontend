import './App.css';
import Header from './components/header';
import AddStudent from './components/addStudent';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import DisplayStudents from './components/AllStudents';
import UpdateStudent from './components/updateStudent';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header/>

        <Routes>
          <Route path="/addStudent" element={<AddStudent/>}/>
        </Routes>

        <Routes>
          <Route path="/updateStudent/:id" element={<UpdateStudent/>}/>
        </Routes>

        <Routes>
          <Route path='/' element={<DisplayStudents/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
