import React from "react";
// import Navigation from "../components/Navigation";

import Header from "../components/Header";
import Cards from "../components/Cards";
import Contactform from "../components/Contactform";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = ({ toggleShowLinks, isDarkTheme, toggleTheme, showLinks, renderActiveCard }) => {
  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      {/* <Navigation
        toggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        toggleShowLinks={toggleShowLinks}
        showLinks={showLinks}
      /> */}
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Cards toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Contactform />
      <Footer />
    </div>
  );
};

export default Home;
