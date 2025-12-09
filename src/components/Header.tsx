import { AppBar, Button, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <div>
      <AppBar position="fixed" className="header-appbar">
        <Toolbar className="header-toolbar" />
        <div className="header-inner">
          <div className="header-left">
            <Typography
              variant="h6"
              component={"a"}
              href="#hero"
              color="inherit"
              className="header-logo"
            >
              Winter Walimah: The Gala
            </Typography>
          </div>
          <div className="header-middle">
            <Button
              className="header-nav-link"
              variant="text"
              color="inherit"
              href="#what-to-expect"
            >
              What To Expect
            </Button>
            <Button
              className="header-nav-link"
              variant="text"
              color="inherit"
              href="#information"
            >
              Where, When & What
            </Button>
            <Button
              className="header-nav-link"
              variant="text"
              color="inherit"
              href="#faq"
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
            >
              EARLY BIRD TICKETS
            </Button>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
