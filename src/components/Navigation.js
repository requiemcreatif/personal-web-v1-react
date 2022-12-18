import React, { useState } from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 1rem;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 600px) {
    display: ${(props) => (props.showLinks ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 3.5rem;
    left: 0;
    background-color: #000;
    width: 100%;
    padding: 1rem;
    z-index: 100;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 1rem;

    &:hover {
      color: #ccc;
    }
  }
`;

const Navigation = ({ toggleShowLinks, showLinks }) => {
  //   const [showLinks, setShowLinks] = useState(false)

  //   const toggleShowLinks = () => {
  //     setShowLinks(!showLinks)

  //   }

  return (
    <NavBar>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/">Projects</NavLink>
      <NavLink href="/">Blog</NavLink>
      <NavLink href="/">Contact</NavLink>
      <MenuIcon onClick={toggleShowLinks}>Menu</MenuIcon>
      <NavLinks showLinks={showLinks && window.innerWidth < 600}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Projects</NavLink>
        <NavLink href="/">Blog</NavLink>
        <NavLink href="/">Contact</NavLink>
      </NavLinks>
    </NavBar>
  );
};

export default Navigation;
