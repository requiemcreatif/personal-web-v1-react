import React from "react";
import styled from "styled-components";
import sketch from "../img/sketch.svg";
import html from "../img/html.svg";
import css from "../img/css.svg";
import react from "../img/react.svg";
import javascript from "../img/javascript.svg";
import nodejs from "../img/nodejs.svg";

const HeaderDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 6rem auto;
  padding: 15rem 4rem;

  img {
    width: 30px;

    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
      filter: invert(1);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 5rem 4rem;
  }
  .images {
    display: flex;
    gap: 2rem;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    h1 {
      font-size: 4.5em;
      //color: #203f59;
    }
    p {
      font-size: 1.7rem;
      //color: #203f59;
      line-height: 1.4;
    }
    button {
      color: #fff;
      border: none;
      padding: 1rem 2rem;
      border-radius: 5px;
      font-size: 1.6rem;
      width: 150px;
      cursor: pointer;
      &:hover {
        background-color: #fe5f55;
        color: #203f59;
        scale: 1.1;
        transition: 0.5s;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <h1>Full Stack Development</h1>

        <p>
          Alain Mani is a French Full Stack Web Developer, with graphic design background. He is
          based in Malta. He has a passion for coding and design. He is also a indie game developer
          working on his first game.
        </p>
        <div className="images">
          <img src={html} style={{ width: "26px" }} alt="html" />
          <img src={css} alt="css" style={{ width: "26px" }} />
          <img src={javascript} alt="javascript" />
          <img src={react} alt="react" />
          <img src={nodejs} alt="node.js" />
        </div>

        <button>Get in touch</button>
      </div>
      <section></section>
    </HeaderDiv>
  );
};

export default Header;
