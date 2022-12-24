import React from "react";
import styled from "styled-components";
import { useState } from "react";
import AboutModal from "./AboutModal";
import Sidemenu from "./Sidebar";
import Contactform from "./Contactform";

// import { GlobalStyles, lightTheme, darkTheme } from "../theme";
// import sketch from "../img/sketch.svg";
// import html from "../img/html.svg";
// import css from "../img/css.svg";
// import react from "../img/react.svg";
// import javascript from "../img/javascript.svg";
// import nodejs from "../img/nodejs.svg";

const DivHeader = styled.div`
  //background-color: #c2e0f2;
`;

const HeaderDiv = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20rem 4rem;

  h1 {
    font-size: 5.5em;
    //color: #193147;

    @media (max-width: 768px) {
      font-size: 4em;
      margin-top: 4rem;
    }
  }

  /* img {
    width: 30px;

    &:hover {
      transform: scale(1.2);
      transition: 0.2s;
      filter: invert(49%) sepia(79%) saturate(1630%) hue-rotate(326deg) brightness(99%)
        contrast(101%);
    }
  } */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 10rem 4rem;
  }
  .images {
    display: flex;
    gap: 2rem;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    div {
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      gap: 3rem;

      //first button in the div
      button:first-child {
        //background-color: #193147;
        color: #fff;
        border: none;
        padding: 1.5rem 2rem;
        border-radius: 3px;
        font-size: 1.6rem;
        width: 190px;
        cursor: pointer;

        @media (max-width: 768px) {
          width: 300px;
        }

        &:hover {
          background-color: #8fbdd9;
          color: #203f59;
          //transform: scale(1.1);
          transition: 0.5s;
          boder: none;
        }
      }

      button:last-child {
        background-color: transparent;
        //color: #fff;
        //border: 1px solid #193147;
        padding: 1.5rem 2rem;
        border-radius: 3px;
        font-size: 1.6rem;
        width: 190px;
        cursor: pointer;
        @media (max-width: 768px) {
          width: 300px;
        }
        &:hover {
          background-color: #8fbdd9;
          border: none;
          color: #fff;
          //transform: scale(1.1);
          transition: 0.5s;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }

    h3 {
      font-size: 1.3em;
      font-weight: 300;
      padding: 0 15rem;
      text-align: center;

      @media (max-width: 768px) {
        padding: 0;
        text-align: left;
        //color: #193147;
      }
    }
    /* p {
      font-size: 1.1em;
      line-height: 1.4;
      font-weight: 300;
      padding-right: 5rem;
      //color: #193147;

      @media (max-width: 768px) {
        padding-right: 0;
      }
    } */
  }
`;

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const removeModal = () => setModalIsOpen(true, console.log("show"));
  const handleClose = () => setModalIsOpen(false, console.log("closed"));

  return (
    <DivHeader className="div-header">
      {modalIsOpen && <AboutModal onClick={handleClose} />}

      <HeaderDiv className="first">
        <div>
          <h1 className="heading-font">Full Stack Development</h1>

          <h3 className="hero-text">
            Alain Mani is a multitalented French developer with expertise in full stack web
            development and a background in graphic design.
          </h3>

          {/* <p className="hero-text">
            Based in Malta, he is passionate about coding and design, and has a particular interest
            in game development. Currently, Alain is working on his first indie game, which
            showcases his creativity and technical skills. In addition to his web development and
            game development pursuits, Alain has a strong eye for aesthetics and is skilled in
            creating visually appealing and user-friendly web applications.
          </p> */}
          <div>
            <button className="about-me-btn" onClick={removeModal}>
              More About Me
            </button>
            <button className="get-in-touch">Get in touch</button>
          </div>
        </div>
      </HeaderDiv>
    </DivHeader>
  );
};

export default Header;
