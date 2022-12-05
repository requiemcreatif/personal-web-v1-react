import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem;
  background-color: #203f59;
  color: #f2f2f2;

  //put your code here
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        <p>2022 ©Requiem Creatif by Alain Mani </p>
      </div>
    </FooterDiv>
  );
};

export default Footer;
