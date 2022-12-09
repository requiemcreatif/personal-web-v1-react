import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Contactform from "./components/Contactform";
import styled from "styled-components";

//https://dev.to/requiemcreatif
// dark mode implementation
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./theme";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyles />
        <BrowserRouter>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Header />
          <Cards />
          <Contactform />
          {/* <Contact /> */}

          <Footer />
          <Routes>
            {/* <Route path="/" element={<App />} /> */}

            <Route path="/blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
