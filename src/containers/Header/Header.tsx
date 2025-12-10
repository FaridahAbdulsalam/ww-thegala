import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
      <AppBar position="fixed" className="header-appbar">
        <Toolbar className="header-toolbar">
          <div className="header-inner">
            <div className="header-left">
              <Typography
                variant="h6"
                component={"a"}
                href="#hero"
                color="inherit"
                className="header-logo"
                onClick={closeMobileMenu}
                sx={{ textDecoration: 'none' }}
              >
                Winter Walimah
              </Typography>
            </div>
            <div className="header-middle">
              <Button
                className="header-nav-link"
                variant="text"
                color="inherit"
                href="#what-to-expect"
                disableRipple
              >
                What To Expect
              </Button>
              <Button
                className="header-nav-link"
                variant="text"
                color="inherit"
                href="#information"
                disableRipple
              >
                Where & When
              </Button>
              <Button
                className="header-nav-link"
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
                href="https://www.eventbrite.com/e/winter-walimah-the-gala-tickets-1976923644839?aff=oddtdtcreator"
                target="_blank"
                rel="noreferrer"
                className="header-tickets"
                disableRipple
              >
                EARLY BIRD TICKETS
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
          className="header-mobile-link"
          onClick={closeMobileMenu}
        >
          What To Expect
        </a>
        <a
          href="#information"
          className="header-mobile-link"
          onClick={closeMobileMenu}
        >
          Where & When
        </a>
        <a
          href="#faq"
          className="header-mobile-link"
          onClick={closeMobileMenu}
        >
          FAQ
        </a>
      </div>
    </>
  );
};

export default Header;