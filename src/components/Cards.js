import React from "react";
import styled from "styled-components";
import backend from "../img/backend.svg";
import sketch from "../img/sketch.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import react from "../img/react.svg";
import javascript from "../img/javascript.svg";
import nodejs from "../img/nodejs.svg";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 10rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;

  .text-title {
    border-bottom: 1px solid #fe5f55;
    padding-bottom: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .card {
      width: 80%;
    }
  }
`;

const LeftDiv = styled.div`
  width: 600px;
  height: 100%;
  background: transparent;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cards = () => {
  return (
    <Wrapper>
      <LeftDiv></LeftDiv>
      <Div>
        <div class="card">
          <div class="card-details">
            <p class="text-title">Front End</p>
            <p class="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
            <p class="text-title">Back End</p>
            <p class="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
            <p class="text-title">Full Stack Development</p>
            <p class="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
            <p class="text-title">Graphic Design</p>
            <p class="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.
            </p>
          </div>
          <button class="card-button">More info</button>
        </div>
      </Div>
    </Wrapper>
  );
};

export default Cards;
