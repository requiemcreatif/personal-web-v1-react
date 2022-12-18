import React from "react";
import whiteLogo from "../img/whiteLogo.svg";
import styled from "styled-components";

const Nav = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(#203f59, #1e3746);
  color: #fff;
  padding: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }

  img {
    height: 30px;
    color: #203f59;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  &:hover {
    color: #ccc;
  }
`;

const NavDiv = styled.div`
  background: linear-gradient(#203f59, #1e3746);
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

const NavBarFirst = () => {
  return (
    <NavDiv>
      <Nav>
        <img src={whiteLogo} alt="Logo" />
        <NavList>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </NavDiv>
  );
};

export default NavBarFirst;
