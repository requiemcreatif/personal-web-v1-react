import React from "react";
import Logo from "../img/Logo.svg";

import menuIcon from "../img/menuIcon.svg";
import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #ffffff;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  img {
    height: 30px;
    color: #203f59;
  }

  nav {
    height: 80px;
    background-color: #ffffff;
    color: #203f59;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 4rem;

    .mobileMenu {
      display: none;
    }

    @media (max-width: 768px) {
      .mobileMenu {
        display: block;
        width: 40px;
      }
    }

    ul {
      display: flex;
      list-style: none;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        margin: 0 2rem;

        a {
          text-decoration: none;
          color: #203f59;
          padding: 1rem;
        }
        &:hover {
          color: #fe5f55;
          transition: 0.3s ease-in-out;
          scale: 1.1;
          cursor: pointer;
        }
      }
    }
  }
`;

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  return (
    <NavContainer>
      <nav>
        <img src={Logo} alt="Logo" />
        {/* <h1>LOGO</h1> */}
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
          <li></li>
        </ul>
        <img className="mobileMenu" src={menuIcon} alt="open menu" />

        <label className="switch">
          <input type="checkbox" />
          <span className="slider" onClick={toggleTheme}></span>
        </label>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
