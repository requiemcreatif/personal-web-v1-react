import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
// import { GlobalStyles, lightTheme, darkTheme } from "../theme";
// import backend from "../img/backend.svg";
// import sketch from "../img/sketch.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import react from "../img/react.svg";
import javascript from "../img/javascript.svg";
import nodejs from "../img/nodejs.svg";
import { useState } from "react";

export const CardDivWrapper = styled.div`
  padding: 5rem 0;
  //background-color: #fff;
`;
const Wrapper = styled.div`
  max-width: 1400px;
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
  align-items: center;
  //gap: 1rem;
  margin: 2rem auto;

  .card {
    margin-bottom: 3rem;
  }

  .text-title {
    //border-bottom: 1px solid #fe5f55;
    border-bottom: 1px solid #c7b59c;
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
  //padding: 0 45rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    //padding: 0 2rem;
  }

  .text-animation {
    opacity: 0;
    transition: all 0.5s ease;
  }

  .text-animation.visible {
    opacity: 1;
    transform: scale(0.9);
  }

  .fade-in {
    opacity: 0;
    transition: opacity 0.5s ease-in;
    //transform: scale(0.9);
  }

  div {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .image-box {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }

    h3 {
      font-size: 2.5rem;
      text-align: center;
      padding: 1rem 0;
    }

    p {
      font-size: 1.8rem;
      text-align: center;
      line-height: 2.5rem;
    }

    img {
      width: 8%;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Cards = ({ setShowComponentA }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [visible, setVisible] = useState(false);

  //Make the text visible on the left side and remove it after 3 seconds

  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        setVisible(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [visible]);

  return (
    <CardDivWrapper className="card-div-wrapper">
      <Wrapper>
        <LeftDiv>
          {activeCard && activeCard === "front-end" ? (
            <div className={`text-animation ${visible ? "visible" : ""}`}>
              <h3>Front End projects</h3>
              <p>
                User interfaces and visual designs of websites or web applications, using React,
                JavaScript, HTML, and CSS.
              </p>

              <div className="image-box">{/* <img src={react} alt="react" /> */}</div>
            </div>
          ) : activeCard === "back-end" ? (
            <div className={`text-animation ${visible ? "visible" : ""}`}>
              <h3>Back End projects</h3>
              <p>
                Node.js and Express to create server-side scripts and integrate with databases using
                MongoDB or Firebase.
              </p>
              <div className="image-box">{/* <img src={react} alt="react" /> */}</div>
            </div>
          ) : activeCard === "full-stack" ? (
            <div className={`text-animation ${visible ? "visible" : ""}`}>
              <h3>Full Stack projects</h3>
              <p>
                User interfaces and server-side development, using React, Node.js, Express, MongoDB,
                and Firebase.
              </p>
              <div className="image-box">{/* <img src={react} alt="react" /> */}</div>
            </div>
          ) : activeCard === "graphic-design" ? (
            <div className={`text-animation ${visible ? "visible" : ""}`}>
              <h3>Graphic design projects</h3>
              <p>
                Creation of visual appealing designs for websites, web applications, and mobile
                applications.
              </p>
              <div className="image-box">{/* <img src={react} alt="react" /> */}</div>
            </div>
          ) : null}
        </LeftDiv>
        {/* <Div>
        {["Front End", "Back End", "Full Stack Development", "Graphic Design"].map((title) => (
          <div className="card" key={title}>
            <div className="card-details">
              <p className="text-title">{title}</p>
              <p className="text-body">
                {title} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper
                orci.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => setActiveCard(title.toLowerCase().replace(/ /g, "-"))}>
              More info
            </button>
          </div>
        ))}
      </Div> */}

        <Div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Front End</p>
              <p className="text-body">
                User interfaces and visual designs of websites or web applications, using React,
                JavaScript, HTML, and CSS.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => {
                setActiveCard("front-end");
                setVisible(true);
              }}>
              More info
            </button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Back End</p>
              <p className="text-body">
                Node.js and Express to create server-side scripts and integrate with databases using
                MongoDB or Firebase.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => {
                setActiveCard("back-end");
                setVisible(true);
              }}>
              More info
            </button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Full Stack Development</p>
              <p className="text-body">
                User interface and server-side development, using React, Node.js, Express, MongoDB,
                and Firebase.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => {
                setActiveCard("full-stack");
                setVisible(true);
              }}>
              More info
            </button>
          </div>
          <div className="card">
            <div className="card-details">
              <p className="text-title">Graphic Design</p>
              <p className="text-body">
                Creation of visual appealing designs for websites, web applications, and mobile
                applications.
              </p>
            </div>
            <button
              className="card-button"
              onClick={() => {
                setActiveCard("graphic-design");
                setVisible(true);
              }}>
              More info
            </button>
          </div>
        </Div>
      </Wrapper>
    </CardDivWrapper>
  );
};

export default Cards;
