import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/styles/theme.ts";
import "./App.scss";
import "./assets/styles/global.scss";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InformationSection from "./components/InformationSection";
import WhatToExpect from "./components/WhatToExpect";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Header />
        <main className="main">
          <Hero />
          <WhatToExpect />
          <InformationSection />
          <FAQSection />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
