import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivSidebar = styled.div`
  div {
    padding: 4rem 3rem;
  }
  .sidebar {
    background-color: #193147;
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 110;
    width: 400px;
    height: 100vh;
    transform: translateX(100%);
    transition: all 0.5s;

    @media (max-width: 768px) {
      width: 300px;
    }
  }
  .links {
    text-decoration: none;
    color: #fff;
  }

  .sidebar li {
    list-style: none;
    padding: 2rem 4rem;
    font-size: 1.5rem;
    align-items: center;
    border-bottom: 0.5px solid #fff;
    cursor: pointer;
    &:hover {
      background-color: #8fbdd9;
      color: #203f59;
      transform: scale(1.1);
      transition: 0.5s;
      border: none;
    }
  }

  .sidebar--open {
    transform: translateX(0%);
  }

  .switch {
  }
`;

const Sidebar = ({ sidebar, isDarkTheme, toggleTheme }) => {
  //console.log(sidebar, "rendered");
  return (
    <DivSidebar>
      <ul className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        <li>Home</li>
        <li>
          <Link
            className="links"
            to={{ pathname: "https://dev.to/requiemcreatif" }}
            target="_blank">
            Blog
          </Link>
        </li>
        <li>Contact</li>
        <div>
          <label className="switch">
            <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
            <span className="slider"></span>
          </label>
        </div>
      </ul>
    </DivSidebar>
  );
};

export default Sidebar;
