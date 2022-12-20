import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  //background-color: #000000;
  //background-color: #053651;
  background-color: #f2b705;
  div {
    margin: 0 auto;
    //display: flex;
    max-width: 1400px;
    //align-items: center;
    //justify-content: space-between;
    align-items: center;
    padding: 4rem 4rem;
    text-align: center;
    //background-color: #203f59;
    //background-color: #000000;

    color: #f2f2f2;
  }
`;

const Footer = () => {
  return (
    <FooterDiv className="div-footer">
      <div>
        <p>2022 ©Requiem Creatif by Alain Mani </p>
      </div>
    </FooterDiv>
  );
};

export default Footer;
