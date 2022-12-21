import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;


  h1.first {
    color: ${({ theme }) => theme.textFont};
  }
    button {
            background-color: ${({ theme }) => theme.btnBackground};
        }
        .div-header {
            background-color: ${({ theme }) => theme.headerDiv};
        }
        
        .card-div-wrapper {
            background-color: ${({ theme }) => theme.cardBody};
        }

        .div-contact{
          background-color: ${({ theme }) => theme.divContact};
        }

        .div-footer {
          background-color: ${({ theme }) => theme.divFooter};
        }

        .nav-div {
          background-color: ${({ theme }) => theme.navDiv};
        }

        .hero-text {
          color: ${({ theme }) => theme.heroText};
        }

        .heading-font {
          color: ${({ theme }) => theme.headingFont};
        }
        .menu-links > li {
          color: ${({ theme }) => theme.menuLinks};
        }
        .get-in-touch {
          color: ${({ theme }) => theme.getInTouch};
          border: 1px solid ${({ theme }) => theme.getInTouch};
        }
        .about-me-btn {
          background-color: ${({ theme }) => theme.aboutMeBtn};
        }

        .modal-text {
          color: ${({ theme }) => theme.modalText};
        }
  }
  


    
`;
export const lightTheme = {
  text: "#193147",
  heroText: "#193147",
  headingFont: "#193147",
  headerDiv: "#cab59a",

  navDiv: "#cab59a",
  menuLinks: "#193147",
  getInTouch: "#000",
  aboutMeBtn: "#193147",
  //cardBody: "#193147",
  cardBody: "#F4EEE5",
  btnBackground: "#203f59",
  divContact: "#91B8C7",
  divFooter: "#193147",
};
export const darkTheme = {
  text: "#fff",
  heroText: "#fff",
  navDiv: "#193147",
  menuLinks: "#fff",
  getInTouch: "#cab59a",
  aboutMeBtn: "#cab59a",
  headerDiv: "#193147",
  modalText: "#193147",
  cardBody: "#193148",
  divContact: "#193147",
  textFontP: "#fff",
  divFooter: "#193147",
};
