import { Box, Container, Typography, Button, Card } from "@mui/material";
import frame1 from "../../assets/images/background-style.png";
import frame2 from "../../assets/images/style-inspo/Sister-style-1.png";

import "./WhatToExpect.scss";

const WhatToExpect = () => {
  return (
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
            <Typography variant="h2" className="wte-conveyor-text">
              Keynote.
            </Typography>

            {/* Duplicate set for seamless loop */}
            <Typography variant="h2" className="wte-conveyor-text">
              Awards.
            </Typography>
            <Typography variant="h2" className="wte-conveyor-text">
              Dinner.
            </Typography>
            <Typography variant="h2" className="wte-conveyor-text">
              Auction.
            </Typography>
            <Typography variant="h2" className="wte-conveyor-text">
              Keynote.
            </Typography>
          </Box>
        </Box>

        <Box className="wte-style-block">
          <Typography variant="h1" className="wte-style-title">
            Dress to Impress
          </Typography>
          <Typography variant="body2" className="wte-style-subtitle">
            Not sure what to wear? We've done the hard work for you. Browse our
            style guide for inspiration.
          </Typography>
          <Box className="wte-style-carousel">
            <Card className="wte-style-card">
              <img
                src={frame1}
                alt="Formal Attire 1"
                className="wte-style-image"
              />
            </Card>
            <Card className="wte-style-card">
              <img
                src={frame2}
                alt="Formal Attire 2"
                className="wte-style-image"
              />
            </Card>
            <Card className="wte-style-card">
              <img
                src={frame1}
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

        <Box className="wte-grid">
          {/*Dinner*/}
          <Box className="wte-card">
            <Typography variant="h1" className="wte-card-title">
              Dinner
            </Typography>
            <Typography variant="body1" className="wte-card-text">
              Enjoy a delicious three-course meal inspired by West-African
              Cuisine. With an array of dishes to choose from your bound to
              leave with a happy heart and full belly!{" "}
            </Typography>
          </Box>

          {/*Awards*/}
          <Box className="wte-card">
            <Typography variant="h1" className="wte-card-title">
              Awards
            </Typography>
            <Typography variant="body1" className="wte-card-text">
              Your community. Your voice. You spoke and we listened. This year,
              we’re handing the power to you to help us recognize outstanding
              individuals in our community. Cast your votes for the awards that
              matter most to you and help us celebrate those who make a
              difference and keep our community thriving.
            </Typography>

            <Typography
              variant="body1"
              component="a"
              href="https://www.instagram.com/stories/highlights/18111097441721134/"
              target="_blank"
              rel="noreferrer"
              className="faq-answer-link"
            >
              Send in your nominees →
            </Typography>

            {/* <Button
              variant="outlined"
              color="primary"
              className="wte-awards-link"
              component="a"
              href="https://YOUR-GOOGLE-FORM-LINK-HERE"
              target="_blank"
              rel="noreferrer"
            >
              Submit Your Votes
            </Button> */}
          </Box>

          {/*Keynote Speaker*/}
          <Box className="wte-card">
            <Typography variant="h1" className="wte-card-title">
              Keynote Speaker
            </Typography>
            <Typography variant="body1" className="wte-card-text">
              We have the esteemed pleasure of welcoming Br. Taofiq Abdulsalam
              as our keynote speaker. Br. Taofiq is an excellent example for the
              youth, whose powerful words, lived personal & profesional
              experience and inspiring life story have made him a popular choice
              among the youth. His captivating lectures are relatable, funny and
              contain important reminders we need as muslims.
            </Typography>
          </Box>

          {/*Auction*/}
          <Box className="wte-card">
            <Typography variant="h1" className="wte-card-title">
              Auction
            </Typography>
            <Typography variant="body1" className="wte-card-text">
              As we prepare for an unforgettable evening, we are excited to
              announce that our auction will be back! Featuring an array of
              exclusive items and experiences. From unique memorabilia to
              pratical services, there will be something for everyone to bid on.
              All proceeds from the auction will go towards this year's chosen
              charity. Get ready to bid generously and make a difference witin
              the ummah.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhatToExpect;
