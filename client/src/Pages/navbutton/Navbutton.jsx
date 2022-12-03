import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import { Link } from "react-router-dom";
import "./navbutton.css";

const Navbutton = () => {
  const [menuIcon, setMenuIcon] = useState(false);
//   const [show, setShow] = useState(false)

  return (
    <div >
      
      <div className={ menuIcon ? "nav-sidebar-2 active" : "nav-sidebar-2 "}>
        <nav className="side-nav-2">
        <NavLink
            to="/"
            className="side-nav-links-2"
            style={{textDecoration: "none",color: "black"  }} 
            onClick={() => setMenuIcon(false)} >
            <p>Home</p>
          </NavLink>
          <div className="side-nav-div-2">
            <div>
              <p>PUBLIC</p>
            </div>
            <NavLink
              to="/Questions"
              className="side-nav-links-2"
              style={{textDecoration: "none",color: "black" }} 
              onClick={() => setMenuIcon(false)} >
              <p> Questions </p>
            </NavLink>
            <NavLink
              to="/Tags"
              className="side-nav-links-2"
              style={{ textDecoration: "none",color: "black"  }}
              onClick={() => setMenuIcon(false)} >
              <p>Tags</p>
            </NavLink>
            <NavLink
              to="/Users"
              className="side-nav-links-2"
              style={{textDecoration: "none" ,color: "black"}}
              onClick={() => setMenuIcon(false)} >
              <p>Users</p>
            </NavLink>
            <NavLink
              to="/products"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "black" }}
              onClick={() => setMenuIcon(false)} >
              <p > Products </p>
            </NavLink>
            <NavLink
              to="/products"
              className="side-nav-links-2 side-nav-list-2"
              style={{textDecoration: "none",color: "black" }}
              onClick={() => setMenuIcon(false)} >
              <p> For Teams </p>
            </NavLink>
            <CgClose
                name="close-outline"
                className="mobile-nav-icon close-outline" 
                onClick={() => setMenuIcon(false)}
              />
           </div>
        </nav>
        
      
      </div>
      <div className="mobile-navbar-btn">
              <CgMenu
                name="menu-outline"
                className="mobile-nav-icon"
                onClick={() =>
                     setMenuIcon(true)
                }
               
                />
                
               
            </div> 
    </div>
    
  );
};

export default Navbutton;
