import React, { Component } from "react";


const NavBar = ({totalCounters}) => {
  return (
    <nav  style={{width:500 , margin:'auto'}} className="navbar navbar-light">
      <div  style={{textAlign:'center'}} className="container-fluid">
          <span style={{color:'#43bafa',fontWeight:'bold',fontSize:'25px'}}>Total Different items : 
          </span> <span style={{fontSize:'25px'}} className="badge  bg-secondary">{totalCounters}</span>
        
      </div>
    </nav>
  );
}
 
 export default NavBar;

// class Navbar extends Component {
//   render() {
    
//   }
// }

// export default Navbar;
