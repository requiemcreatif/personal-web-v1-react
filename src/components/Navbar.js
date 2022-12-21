import React from "react";
import whiteLogo from "../img/whiteLogo.svg";
import Logo from "../img/Logo.svg";
import menuIcon from "../img/menuIcon.svg";
import styled from "styled-components";
import { lightTheme } from "../theme";
import { BiMenu } from "react-icons/bi";

export const NavContainer = styled.nav`
  //background-color: #053651;
  background-color: #3c86a3;
  //background: linear-gradient(#053651, #101b21);
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
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 4rem;

    .bimenu {
      color: #193147;
      font-size: 4rem;
    }

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
      display: none;
      list-style: none;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        margin: 0 2rem;
        //color: #024959;

        a {
          text-decoration: none;
          //color: #000;
          padding: 1rem;
        }
        &:hover {
          color: #fff;
          transition: 0.3s ease-in-out;
          scale: 1.1;
          cursor: pointer;
        }
      }
    }
  }
`;

const Navbar = ({ toggleTheme, isDarkTheme, lightTheme }) => {
  return (
    <NavContainer className="nav-div">
      <nav>
        {/* <img src={Logo} alt="Logo" /> */}
        {!isDarkTheme ? <img src={Logo} alt="Logo" /> : <img src={whiteLogo} alt="Logo" />}
        <ul className="menu-links">
          <li className="menu-links">Home</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        {/* <img className="mobileMenu" src={menuIcon} alt="open menu" /> */}
        <BiMenu className="bimenu" />
        <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </nav>
    </NavContainer>
  );
};

export default Navbar;
