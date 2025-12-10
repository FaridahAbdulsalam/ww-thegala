import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./assets/styles/theme.ts";
import "./App.scss";
import "./assets/styles/global.scss";
import FAQSection from "./containers/FAQs/FAQSection.tsx";
import Footer from "./containers/Footer/Footer.tsx";
import Header from "./containers/Header/Header.tsx";
import Hero from "./containers/Hero/Hero.tsx";
import InformationSection from "./containers/Information/InformationSection.tsx";
import WhatToExpect from "./containers/What To Expect/WhatToExpect.tsx";

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
