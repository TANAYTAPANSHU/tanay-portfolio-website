import React from "react";
import { NavLink } from "react-router-dom";
import { socialLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10  rounded-lg bg-white flex items-center justify-center font-bold shadow-md px-10 py-6"
      >
        <p className="blue-gradient_text">Tanay</p>
      </NavLink>
      <nav className="flex flex-wrap text-sm ml-2 md:text-lg gap-2 md:gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
        <a
          href="https://github.com/TANAYTAPANSHU"
          className={"text-black hover:text-blue-500"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          href="https://www.linkedin.com/in/tanay-tapanshu-a128a8179/"
          className={"text-black hover:text-blue-500"}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.example.com/path-to-your-resume.pdf"
          className={"text-black hover:text-blue-500"}
          target="_blank"
          rel="noopener noreferrer"
          download="your-resume.pdf"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
