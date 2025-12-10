import { Box, Container, Typography, Button } from "@mui/material";
import mapImage from "../../assets/images/map.png";
import "./InformationSection.scss";

const InformationSection = () => {
  return (
    <Box component="section" id="information" className="info-section">
      <Container maxWidth="md" className="info-container">
        <Box className="info-header">
          <Typography variant="h2" className="info-title">
            Where to find us
          </Typography>
          <Typography variant="h3" className="info-subtitle">
            Join us at Longfield Hall in South London
          </Typography>
        </Box>

        <Box className="info-layout">
          <Box className="info-details">
            <Typography variant="h1" className="info-venue">
              The Venue
            </Typography>
            <Typography variant="body1" className="info-address-line">
              Longfield Hall
            </Typography>
            <Typography variant="body1" className="info-address-line">
              50 Knatchbull Road
            </Typography>
            <Typography variant="body1" className="info-address-line">
              London, SE5 9QY
            </Typography>
            <Typography variant="body1" className="info-date-time">
              Saturday 10th January 2026 | 1:30pm - 8:00pm
            </Typography>
            <Typography variant="h1" className="info-getting-there">
              Getting There
            </Typography>
            <Typography variant="body1" className="info-transport">
              The venue is easily accessible via public transport. The nearest
              tube stations are Stockwell, Oval or Loughborough Junction
              (Northern line), just a 10-minute walk away. Several bus routes
              also serve the area.
            </Typography>
            <Typography variant="body1" className="info-parking">
              There is free street parking is available on-site.
            </Typography>
          </Box>

          <Box className="info-map-wrapper">
            <a
              href="https://maps.app.goo.gl/nA8F3d9AQWxopZp58"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="info-map-image"
                src={mapImage}
                alt="Map showing location of Winter Walimah: The Gala"
              />
            </a>
            <Button
              variant="contained"
              color="primary"
              className="info-map-button"
              href="https://maps.app.goo.gl/89UsNLXnbVXpjpJY8"
              target="_blank"
              rel="noreferrer"
              component="a"
            >
              Get Directions
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default InformationSection;
