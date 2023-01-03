import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
//import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import BackDropMenu from "../components/BackDropMenu";
// import Navigation from "../components/Navigation";

import Header from "../components/Header";
import Cards from "../components/Cards";
//import SliderComponent from "../components/SliderComponent";
import Contactform from "../components/Contactform";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = ({ toggleShowLinks, isDarkTheme, toggleTheme, showLinks, renderActiveCard }) => {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);

  const toggleSidebar = () => {
    console.log("toggleSidebar called", sidebar);
    setSidebar((prev) => !prev);
  };

  const [showComponentA, setShowComponentA] = useState(true);
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} openSidebar={toggleSidebar} />
      {/* <Navigation
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        toggleShowLinks={toggleShowLinks}
        showLinks={showLinks}
      /> */}

      <Header
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        showComponentA={showComponentA}
        setShowComponentA={setShowComponentA}
      />
      <Sidebar sidebar={sidebar} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {console.log(sidebar)}

      <BackDropMenu sidebar={sidebar} closeSidebar={toggleSidebar} />

      {/* <AnimatePresence>
        {showComponentA ? (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}>
            <Cards
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
              setShowComponentA={setShowComponentA}
            />
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
      </AnimatePresence> */}
      <Cards />
      <Contactform />

      <Footer />
    </div>
  );
};

export default Home;
