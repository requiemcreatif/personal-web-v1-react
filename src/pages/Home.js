import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import BackDropMenu from "../components/BackDropMenu";
// import Navigation from "../components/Navigation";

import Header from "../components/Header";
import Cards from "../components/Cards";
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
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} openSidebar={toggleSidebar} />
      {/* <Navigation
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        toggleShowLinks={toggleShowLinks}
        showLinks={showLinks}
      /> */}

      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Sidebar sidebar={sidebar} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {console.log(sidebar)}
      <BackDropMenu sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Cards toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Contactform />
      <Footer />
    </div>
  );
};

export default Home;
