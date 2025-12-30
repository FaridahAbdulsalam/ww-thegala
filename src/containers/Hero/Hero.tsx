import { Box, Container, Typography, Button } from "@mui/material";
import heroVideo from "../../assets/videos/tablescape2.mp4"
import "./Hero.scss";



const Hero = () => {
  return (
    <Box component="section" className="hero-section" id="hero">
      {/* Video Background */}
      <Box className="hero-video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>

      <Container maxWidth="md" className="hero-container">
        <Box className="hero-content">
          <Typography
            variant="body2"
            color="text.secondary"
            className="hero-eyebrow"
          >
            MFAF Youth Presents
          </Typography>
          <Typography variant="h1" className="hero-title">
            Winter Walimah
          </Typography>
          <Typography variant="h2" className="hero-subtitle">
            THE GALA
          </Typography>
          <Typography variant="body1" className="hero-datetime">
            Saturday, January 10 2026 | 1:30pm - 8:00pm
          </Typography>
          <Typography variant="body1" className="hero-description">
            The annual Winter Walimah. A spectacular evening dedicated to you.
            It's time to celebrate your community!
          </Typography>
          <Typography variant="h3" className="hero-description">
             This event is currently SOLD OUT
          </Typography>

          <Box className="hero-actions">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="hero-primary-button"
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdaQlC77oETfhyAOd6afaFoktPqlJAP9hHhLpbGv4U3Gitk6g/viewform"
            >
              Join our waiting list
            </Button>
            <Button
              variant="text"
              color="inherit"
              href="#what-to-expect"
              className="hero-secondary-link"
            >
              See what awaits you
            </Button>
            <span className="material-symbols-outlined arrow-south">south</span>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;