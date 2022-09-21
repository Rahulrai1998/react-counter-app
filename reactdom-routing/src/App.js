import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/page1";
import Contact from "./components/page2";
import About from "./components/page3";
import Profile from "./components/page4";
import { AuthProvider, useAuth } from "./components/auth";
import { Login } from "./components/login";
import { Navbar } from "./components/navbar";
import { Logout } from "./components/logout";
import RequireAuth from "./components/requireAuth";

function App() {
  // const auth = useAuth();

  return (
    <AuthProvider>
      <Router>
        <div className="App">

          <Navbar/>
          {/* <ul className="nav">
            <li className="list">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="list">
              <Link to="/page2" className="link">
                Contact
              </Link>
            </li>
            <li className="list">
              <Link to="/page3" className="link">
                About
              </Link>
            </li>
            <li className="list">
              <Link to="/page4" className="link">
                Profile
              </Link>
            </li>
            {console.log(useAuth.user)}
            {!useAuth.user && (
              <li className="list">
                <Link to="/login" className="link">
                  Login
                </Link>
              </li>
            )}
          </ul> */}


          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/page2" element={<Contact />}></Route>
            <Route exact path="/page3" element={<About />}></Route>
            <Route exact path="/page4" element={<RequireAuth><Profile /></RequireAuth>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/logout" element={<Logout />}></Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
