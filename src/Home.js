import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Home;
