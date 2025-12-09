import { Box, Container, Typography, Button, Grid, Card } from "@mui/material";

import "./WhatToExpect.scss";

const WhatToExpect = () => {
  return (
    <div>
      <Box component="section" id="what-to-expect" className="wte-section">
        <Container maxWidth="lg" className="wte-container">
          <Box className="wte-conveyor">
            <Box className="wte-conveyor-track">
              <Typography variant="h2" className="wte-conveyor-text">
                Awards.
              </Typography>
              <Typography variant="h2" className="wte-conveyor-text">
                Dinner.
              </Typography>
              <Typography variant="h2" className="wte-conveyor-text">
                Auction.
              </Typography>
            </Box>
          </Box>
          <Box className="wte-style-block">
            <Typography variant="h1" className="wte-style-title">
              Dress to Impress
            </Typography>
            <Typography variant="body2" className="wte-style-subtitle">
              Not sure what to wear? We've done the hard work for you. Browse
              our style guide for inspiration.
            </Typography>
            <Box className="wte-style-carousel">
              <Card className="wte-style-card">
                <img
                  src="/images/what-to-expect/formal1.jpg"
                  alt="Formal Attire 1"
                  className="wte-style-image"
                />
              </Card>
              <Card className="wte-style-card">
                <img
                  src="/images/what-to-expect/formal2.jpg"
                  alt="Formal Attire 2"
                  className="wte-style-image"
                />
              </Card>
              <Card className="wte-style-card">
                <img
                  src="/images/what-to-expect/formal3.jpg"
                  alt="Formal Attire 3"
                  className="wte-style-image"
                />
              </Card>
            </Box>
          </Box>
          <Box className="wte-main-heading-wrapper">
            <Typography variant="h2" className="wte-main-heading">
              WHAT TO EXPECT
            </Typography>
            <Typography variant="h3" className="wte-sub-heading">
              From a three-course dinner to awards, a keynote and more, here’s
              what your evening will hold.
            </Typography>
          </Box>
          <Grid container spacing={4} className="wte-grid">
            {/*Dinner*/}
             <Grid item xs={12} md={6} className="wte-card">
              <Typography variant="h1" className="wte-card-title">
                Dinner
              </Typography>
              <Typography variant="body1" className="wte-card-text">
                Enjoy a delicious three-course meal prepared by top chefs,
              </Typography>
            </Grid>

            {/*Awards*/}
            <Grid item xs={12} md={6} className="wte-card">
              <Typography variant="h1" className="wte-card-title">
                Awards
              </Typography>
              <Typography variant="body1" className="wte-card-text">
                Celebrate your community with a selection of heartfelt awards.
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                className="wte-awards-link"
                component="a"
                href="https://YOUR-GOOGLE-FORM-LINK-HERE"
                target="_blank"
                rel="noreferrer"
              >
                Submit Your Votes
              </Button>
            </Grid>

            {/*Keynote Speaker*/}
            <Grid item xs={12} md={6} className="wte-card">
              <Typography variant="h1" className="wte-card-title">
                Keynote Speaker
              </Typography>
              <Typography variant="body1" className="wte-card-text">
                An inspiring keynote exploring community, gratitude, and
                purpose.
              </Typography>
            </Grid>

            {/*Auction*/}
            <Grid item xs={12} md={6} className="wte-card">
              <Typography variant="h1" className="wte-card-title">
                Auction
              </Typography>
              <Typography variant="body1" className="wte-card-text">
                An inspiring keynote exploring community, gratitude, and
                purpose.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default WhatToExpect;
