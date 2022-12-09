import { createGlobalStyle } from "styled-components";
import { NavContainer } from "./components/Navbar";
import whiteLogo from "./img/whiteLogo.svg";
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
  text: "#203f59",
  btnBackground: "#203f59",
};
export const darkTheme = {
  body: "#101B21",
  //body: "#000",
  //text: "#f1f1f1",
  text: "#fff",
  btnBackground: "#2998D5",
  textFont: "#203f59",
  //nav: "#203f59",
  //Logo: "#fff",
};
