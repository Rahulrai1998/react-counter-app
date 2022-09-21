import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import "./comp-css/compo-styles.css";
import { Login } from "./login";

export const Navbar = () =>{

    const auth = useAuth();
    localStorage.setItem('username' , 'Rahul')
    let name = localStorage.getItem('username')

    localStorage.setItem('a' , auth)
  const b = localStorage.getItem('a')
    return (
        <nav>
            <NavLink className="link" to="/">
                Home
              </NavLink>
              <NavLink to="/page2" className="link">
                Contact
              </NavLink>
              <NavLink to="/page3" className="link">
                About
              </NavLink>
              <NavLink to="/page4" className="link">
                Profile
              </NavLink>
              {!auth.user ? (
                <NavLink to="/login" className="link">Login</NavLink>
              ):<NavLink to="/logout" className="link">Logout</NavLink>

              }

        </nav>
    )
}