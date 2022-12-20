import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  );
}

export default App;
