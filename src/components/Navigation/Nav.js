import React from "react";
import {  AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";



const Nav = ({ handleInputChange, query }) => {
  return (
    <>
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search."
        />
      </div>
      <div className="profile-container">

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
       
      </div>
    </nav>
    </>



    
  );
};

export default Nav;
