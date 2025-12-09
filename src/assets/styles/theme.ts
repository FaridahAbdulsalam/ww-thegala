import { createTheme } from "@mui/material/styles";

//brand colours
const cafeNoir = "#836a31ff";
const kombuGreen = "#354024";
const mossGreen = "#889063";
const tan = "#CFBB99";
const bone = "#E5D7C4";

const theme = createTheme({
  palette: {
    primary: {
      main: kombuGreen,
    },
    secondary: {
      main: tan,
    },
    background: {
      default: bone,
      paper: tan,
    },
    text: {
      primary: cafeNoir,
      secondary: mossGreen,
    },
  },

  typography: {
    // Define typography settings here if needed
    fontFamily: `"The Seasons", serif`,

    //fancy script font for headings
    h1: {
      fontFamily: `"New Icon Script", cursive`,
      fontSize: "3.5rem",
      fontWeight: 400,
      color: cafeNoir,
    },

    //Section headings
    h2: {
      fontFamily: `"Josefin Sans", sans-serif`,
      fontSize: "2.5rem",
      fontWeight: 700,
      color: kombuGreen,
      letterSpacing: "0.05em",
    },

    h3: {
      fontFamily: `"Josefin Sans", sans-serif`,
      fontSize: "1.8rem",
      fontWeight: 600,
      color: cafeNoir,
    },

    //Body text
    body1: {
      fontFamily: `"The Seasons", serif`,
      fontSize: "1rem",
      color: cafeNoir,
    },
    body2: {
      fontFamily: `"The Seasons", serif`,
      fontSize: "0.9rem",
      color: mossGreen,
    },

    button: {
      textTransform: "none", // Disable uppercase transformation
      fontFamily: `"Josefin Sans", sans-serif`,
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          color: bone, // readable on Kombu Green
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: cafeNoir,
        },
      },
    },
  },
});

export default theme;