import React from "react";
import ProfilePic from "../images/profilepic.jpg";

const Info = () => {
  return (
    <div className="container text-center mt-5">
      <img className="rounded" src={ProfilePic} alt="" />
      <div className="info">
        <h1>Samuel Pokam</h1>
        <h4>Frontend Developer</h4>
        <a
          href="https://rinkhimera.github.io/"
          target="_blank"
          rel="noreferrer"
        >
          My Personal Website
        </a>
        <button className="btn btn-primary">Click Me</button>
      </div>
    </div>
  );
};

export default Info;
