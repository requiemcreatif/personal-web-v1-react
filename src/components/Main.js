import React from "react";
import Presentation from "./Presentation";
import Header from "./Header";
import styled from "styled-components";

const MainDiv = styled.div`
  max-width: 1400px;
  margin: 10rem auto;
  //display: grid;
  //grid-template-columns: 1fr 1fr;
  //justify-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = () => {
  return (
    <>
      <MainDiv>
        <Header />
        <Presentation />
      </MainDiv>
    </>
  );
};

export default Main;
