import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class after scrolling 50px
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["hero", "what-to-expect", "information", "faq"];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <AppBar position="fixed" className={`header-appbar ${scrolled ? "scrolled" : ""}`}>
        <Toolbar className="header-toolbar">
          <div className="header-inner">
            <div className="header-left">
              <Typography
                variant="h6"
                component={"a"}
                href="#hero"
                color="#E5D7C4"
                className="header-logo"
                onClick={closeMobileMenu}
                sx={{ textDecoration: 'none' }}
              >
                Winter Walimah
              </Typography>
            </div>
            <div className="header-middle">
              <Button
                className={`header-nav-link ${activeSection === "what-to-expect" ? "active" : ""}`}
                variant="text"
                color="inherit"
                href="#what-to-expect"
                disableRipple
              >
                What To Expect
              </Button>
              <Button
                className={`header-nav-link ${activeSection === "information" ? "active" : ""}`}
                variant="text"
                color="inherit"
                href="#information"
                disableRipple
              >
                Where & When
              </Button>
              <Button
                className={`header-nav-link ${activeSection === "faq" ? "active" : ""}`}
                variant="text"
                color="inherit"
                href="#faq"
                disableRipple
              >
                FAQ
              </Button>
            </div>
            <div className="header-right">
              <Button
                variant="contained"
                color="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdaQlC77oETfhyAOd6afaFoktPqlJAP9hHhLpbGv4U3Gitk6g/viewform"
                target="_blank"
                rel="noreferrer"
                className="header-tickets"
                disableRipple
              >
                Join Waiting List
              </Button>
              {/* Mobile Menu Button */}
              <button
                className={`header-menu-button ${mobileMenuOpen ? "open" : ""}`}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Overlay */}
      <div 
        className={`header-mobile-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Side Menu */}
      <div className={`header-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <a
          href="#what-to-expect"
          className={`header-mobile-link ${activeSection === "what-to-expect" ? "active" : ""}`}
          onClick={closeMobileMenu}
        >
          What To Expect
        </a>
        <a
          href="#information"
          className={`header-mobile-link ${activeSection === "information" ? "active" : ""}`}
          onClick={closeMobileMenu}
        >
          Where & When
        </a>
        <a
          href="#faq"
          className={`header-mobile-link ${activeSection === "faq" ? "active" : ""}`}
          onClick={closeMobileMenu}
        >
          FAQ
        </a>
      </div>
    </>
  );
};

export default Header;