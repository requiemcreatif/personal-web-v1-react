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
  max-width: 1300px;
  margin: 0 auto;
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
  gap: 3rem;
  margin: 0 4rem 6rem 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  div {
    width: 330px;
    height: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #203f59;
    background-color: #fff;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      background-color: #2998d5;
      color: #fff;
      transition: 0.5s;
      scale: 1.1;
    }

    img {
      width: 30px;
    }
  }
`;

const Cards = () => {
  return (
    <Wrapper>
      <div></div>
      <Div>
        <div>
          <img src={react} alt="" />
          <h3>Front End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>

        <div>
          <img src={backend} alt="" />
          <h3>Back End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>

        <div>
          <img src={nodejs} alt="" />
          <h3>Full Stack Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>
        <div>
          <img src={sketch} alt="" />
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>
      </Div>
    </Wrapper>
  );
};

export default Cards;
