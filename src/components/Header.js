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

  h1 {
    font-size: 5.5em;
    //color: #fe5f55;
    //color: #000; // black
    @media (max-width: 768px) {
      font-size: 4em;
    }
  }

  img {
    width: 30px;

    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
      filter: invert(49%) sepia(79%) saturate(1630%) hue-rotate(326deg) brightness(99%)
        contrast(101%);
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
    gap: 4rem;

    p {
      font-size: 1.2em;
      line-height: 1.4;
      font-weight: 300;
      //color: #000;
    }
    button {
      color: #fff;
      border: none;
      padding: 1.5rem 2rem;
      border-radius: 3px;
      font-size: 1.6rem;
      width: 200px;
      cursor: pointer;
      &:hover {
        background-color: #fe5f55;
        color: #203f59;
        transform: scale(1.1);
        transition: 0.5s;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <div>
        <h1 className="first">Full Stack Development</h1>

        <p>
          Alain Mani is a multitalented French developer with expertise in full stack web
          development and a background in graphic design. Based in Malta, he is passionate about
          coding and design, and has a particular interest in game development. Currently, Alain is
          working on his first indie game, which showcases his creativity and technical skills. In
          addition to his web development and game development pursuits, Alain has a strong eye for
          aesthetics and is skilled in creating visually appealing and user-friendly web
          applications.
        </p>
        <div className="images">
          {/* <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={javascript} alt="javascript" />
          <img src={react} alt="react" />
          <img src={nodejs} alt="node.js" /> */}
        </div>

        <button>Get in touch</button>
      </div>
      <section></section>
    </HeaderDiv>
  );
};

export default Header;
