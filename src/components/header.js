import React from "react";
import { Link} from "react-router-dom";

function Header(){

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">

      <a className="navbar-brand" href="#">Navbar</a>
      
      <div className="collapse navbar-collapse" id="navbarNavDropdown">

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/addStudent" className="nav-link">Create Students</Link>
          </li>
        </ul>

      </div>

    </nav>
  )

}

export default Header;