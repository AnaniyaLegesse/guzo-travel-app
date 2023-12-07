import React from "react";
import Category from "./Category/Category";
import Expriance from "./Expirance/Expirance"
import Education from "./Education/Education"
import "./Sidebar.css";


const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
       
        <Category handleChange={handleChange} />
        <Expriance handleChange={handleChange} />
        <Education handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
