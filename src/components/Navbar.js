import React from "react";
import whiteLogo from "../img/whiteLogo.svg";

import menuIcon from "../img/menuIcon.svg";
import styled from "styled-components";

export const NavContainer = styled.nav`
  //background-color: #053651;
  background: linear-gradient(#053651, #101b21);
  color: #203f59;
  //background: linear-gradient(#203f59, #1e3746)
  //background: linear-gradient(#053651, #053651);
  color: #203f59;
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
    //background: linear-gradient(#053651, #101b21);
    //color: #203f59;
    //background-color: #ffffff;
    //background: linear-gradient(#203f59, #1e3746)
    color: #fff;
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
          color: #fff;
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
        <img src={whiteLogo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <img className="mobileMenu" src={menuIcon} alt="open menu" />

        <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
