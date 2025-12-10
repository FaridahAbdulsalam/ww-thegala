import { Box, Container, Typography, Link } from '@mui/material'
import Instagram from '@mui/icons-material/Instagram'
import Email from '@mui/icons-material/Email'
import "./Footer.scss"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box component="footer" className='footer'>
      <Container maxWidth="lg" className='footer-container'>

        <Box className="footer-main">
          <Box className="footer-brand">
            <Typography variant="h6" className='footer-title'>
              Winter Walimah
            </Typography>
            <Typography variant="body2" className='footer-tagline'>
              Presented by MFAF Youth
            </Typography>
          </Box>

          <Box className="footer-contact">
            <Box className="footer-contact-item">
              <Typography className='footer-label'>Follow Us</Typography>
              <Link 
                href="https://www.instagram.com/mfaf.youth/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='footer-link'
              >
                <Instagram />
                @mfafyouth
              </Link>
            </Box>

            <Box className="footer-contact-item">
              <Typography className='footer-label'>Get In Touch</Typography>
              <Link 
                href="mailto:mfafyouth@gmail.com" 
                className='footer-link'
              >
                <Email />
                mfafyouth@gmail.com
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className="footer-bottom">
          <Typography variant='body2' className='footer-info'>
            © 2026 MFAF Youth. All rights reserved.
          </Typography>
          
          <Box className="footer-links-group">
            <Typography 
              variant='body2' 
              className='footer-link-item'
              onClick={scrollToTop}
            >
              Back to Top
            </Typography>
            {/* <Link 
              href="https://YOUR-GOOGLE-FORM-LINK-HERE" 
              target="_blank"
              rel="noopener noreferrer"
              className='footer-link-item'
            >
              Submit Awards
            </Link> */}
          </Box>
        </Box>

      </Container>
    </Box>
  )
}

export default Footer