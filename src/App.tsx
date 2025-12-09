import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/styles/theme.ts";
import "./App.scss";
import "./assets/styles/global.scss";
import FAQSection from "./components/FAQs/FAQSection.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import InformationSection from "./components/Information/InformationSection.tsx";
import WhatToExpect from "./components/What To Expect/WhatToExpect.tsx";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
