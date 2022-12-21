import React from "react";
import styled from "styled-components";

const BackdropOver = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #053651;
  transition: all 0.3s ease-in-out;
  opacity: 0.5;
  //background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  //z-index: 100;
  background-color: #fff;
  max-width: 1200px;
  max-height: auto;
  padding: 2rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);

  border-radius: 0.5rem;
  z-index: 100;
  opacity: 0.9;

  @media (max-width: 768px) {
    padding: 1rem;
    width: 300px;
  }

  button {
    margin: 2rem auto;
    padding: 1rem 2rem;
    width: 15rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    background: #193147;
    color: #f7f7ff;
    font-weight: 300;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const AboutModal = ({ onClick }) => {
  return (
    <>
      <ModalDiv>
        <p className="modal-text">
          Based in Malta, Alain is passionate about coding and design, and has a particular interest
          in game development. Currently, Alain is working on his first indie game, which showcases
          his creativity and technical skills. In addition to his web development and game
          development pursuits, Alain has a strong eye for aesthetics and is skilled in creating
          visually appealing and user-friendly web applications.
        </p>

        <button onClick={onClick}>Close</button>
      </ModalDiv>
      <BackdropOver onClick={onClick} />
    </>
  );
};

export default AboutModal;
