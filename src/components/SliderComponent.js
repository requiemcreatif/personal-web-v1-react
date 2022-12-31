import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import Cards from "./Cards";
import Contactform from "./Contactform";

const LeftArrowButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #666;
  }
`;

const RightArrowButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #666;
  }
`;

function SliderComponent() {
  const [showComponentA, setShowComponentA] = useState(true);

  return (
    <>
      <LeftArrowButton onClick={() => setShowComponentA(true)}>
        <i className="fas fa-arrow-left" />
      </LeftArrowButton>
      <AnimatePresence>
        {showComponentA ? (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}>
            <Cards />
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}>
            <Contactform />
          </motion.div>
        )}
      </AnimatePresence>
      <RightArrowButton onClick={() => setShowComponentA(false)}>
        <i className="fas fa-arrow-right" />
      </RightArrowButton>
    </>
  );
}

export default SliderComponent;
