import React from "react";
import { useRef, useEffect } from "react";
import whiteLogo from "../img/whiteLogo.svg";
import Logo from "../img/Logo.svg";
import styled from "styled-components";
import { BiMenu } from "react-icons/bi";

export const NavContainer = styled.nav`
  margin: 0 auto;
  background-color: #3c86a3;
  color: #203f59;
  color: #203f59;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;

  div.top-menu {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
  }
  img {
    height: 30px;
    color: #203f59;
  }

  .bimenu {
    margin-top: -10px;
    font-size: 5rem;
  }
`;

const Navbar = ({ toggleTheme, isDarkTheme, lightTheme, openSidebar }) => {
  return (
    <NavContainer className="nav-div">
      <div className="top-menu">
        {!isDarkTheme ? <img src={Logo} alt="Logo" /> : <img src={whiteLogo} alt="Logo" />}
        <div className="resp-menu">
          <BiMenu className="bimenu" onClick={openSidebar} />
        </div>
        {/* DARKMODE TOGGLE */}
        {/* <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label> */}
      </div>
    </NavContainer>
  );
};

export default Navbar;
