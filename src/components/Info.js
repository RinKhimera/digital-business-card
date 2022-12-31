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
          role="button"
          className="btn btn-outline-light"
        >
          My Personal Website
        </a>
        <div className="d-grid gap-3 d-flex py-2 justify-content-center">
          <a
            href="https://rinkhimera.github.io/"
            target="_blank"
            rel="noreferrer"
            role="button"
            className="btn btn-outline-primary"
          >
            Source Code
          </a>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="btn btn-outline-info dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My links
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://github.com/RinKhimera"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/samuel-pokam/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="mailto:dixiades@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
