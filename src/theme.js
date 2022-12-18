import { createGlobalStyle } from "styled-components";
import { NavContainer } from "./components/Navbar";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  // change logo color
  .font {
    color: ${({ theme }) => theme.textFont};
  }

    ${NavContainer} {
    }
    button {
            background-color: ${({ theme }) => theme.btnBackground};
        }
    
`;
export const lightTheme = {
  body: "#f7f7ff",
  text: "#000",
  btnBackground: "#203f59",
};
export const darkTheme = {
  body: "#000",
  text: "#fff",
  btnBackground: "#2998D5",
  textFont: "#203f59",
};
