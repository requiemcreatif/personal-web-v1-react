import React from "react";
import styled from "styled-components";

const DivBackDropMenu = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
    width: 100%;
    height: 100vh;
    background-color: #193147;
    //background-color: #c2e0f2;
    opacity: 0.8;
    display: none;
    //transition: width 0.3s ease-in-out;
    animation: fadeIn 0.3s ease-in-out;

    /* @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    } */
  }

  .backdrop--open {
    display: block;
  }
`;

const BackDropMenu = ({ sidebar, closeSidebar }) => {
  return (
    <DivBackDropMenu>
      <div
        className={sidebar ? "backdrop backdrop--open" : "backdrop"}
        onClick={closeSidebar}></div>
    </DivBackDropMenu>
  );
};

export default BackDropMenu;
