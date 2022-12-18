import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #000000;
  div {
    margin: 0 auto;
    display: flex;
    max-width: 1400px;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 4rem;
    //background-color: #203f59;
    background-color: #000000;

    color: #f2f2f2;
  }
`;

const Footer = ({ toggleTheme, isDarkTheme }) => {
  return (
    <FooterDiv>
      <div>
        <p>2022 ©Requiem Creatif by Alain Mani </p>
        <label className="switch">
          <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>
    </FooterDiv>
  );
};

export default Footer;
