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

/*const Div = styled.div`
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
      //background-color: #2998d5;
      //color: #fff;
      transition: 0.5s;
      scale: 1.1;
    }

    img {
      width: 30px;
    }
  }
`;*/

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 3rem;
  padding: 0 4rem;
  margin: 4rem auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .card {
      width: 80%;
    }
  }
`;

const Cards = () => {
  return (
    <Wrapper>
      <div></div>
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
        {/* <div className="cards card">
          <img src={react} alt="" />
          <h3>Front End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>

        <div className="cards card">
          <img src={backend} alt="" />
          <h3>Back End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>

        <div className="cards card">
          <img src={nodejs} alt="" />
          <h3>Full Stack Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div>
        <div className="cards card">
          <img src={sketch} alt="" />
          <h3>Graphic Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper orci.</p>
        </div> */}
      </Div>
    </Wrapper>
  );
};

export default Cards;
