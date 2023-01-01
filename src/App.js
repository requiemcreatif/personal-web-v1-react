import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

//https://dev.to/requiemcreatif
// dark mode implementation
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./theme";
import "./App.css";

function App() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleShowLinks = () => {
    console.log("links");
    setShowLinks(!showLinks);
  };

  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
    <HelmetProvider>
      <Helmet>
        <title>Requiem Creatif - Full stack development by Alain Mani</title>
        <meta
          name="description"
          content="Requiemcreatif is about web development, programming, and technology."
        />
        <meta
          name="keywords"
          content="Full stack development by build web and apps with JavaScript, React, Node, Express, MongoDB, and more."
        />
        <meta name="author" content="Alain Mani" />
      </Helmet>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div>
          <GlobalStyles />
          <BrowserRouter>
            {/* <Navigation
            toggleTheme={toggleTheme}
            isDarkTheme={isDarkTheme}
            toggleShowLinks={toggleShowLinks}
            showLinks={showLinks}
          /> */}
            {/* <NavBarFirst toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
            {/* <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */}
            {/* <Header />
          <Cards />
          <Contactform /> */}
            {/* <Home /> */}
            {/* <Contact /> */}

            {/* <Footer /> */}
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    toggleTheme={toggleTheme}
                    isDarkTheme={isDarkTheme}
                    toggleShowLinks={toggleShowLinks}
                    showLinks={showLinks}
                  />
                }
              />

              <Route path="/blog" element={<Blog />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
