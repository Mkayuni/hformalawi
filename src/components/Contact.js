import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, Paper, IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import './contact.css';

const Contact = () => {
  const [showAddress, setShowAddress] = useState(false);

  const handleGetAddressClick = () => {
    setShowAddress(true);
  };

  const handleCopyToClipboard = () => {
    const address = "7402 N 400 E, North Manchester, IN 46962\ninfo@heartformalawi.org";
    navigator.clipboard.writeText(address);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <Box className="contact-hero-container">
        <Box className="contact-intro-container">
          <Typography variant="h2" component="h2" className="contact-hero-title">
            Support Our Mission
          </Typography>
          <Typography variant="body1" component="p" className="contact-hero-subtitle">
            Your generosity enables us to continue our work and make a lasting impact in the communities we serve.
          </Typography>
        </Box>
      </Box>

      {/* Giving Options */}
      <Container className="giving-options-container">
        <Grid container spacing={6} className="giving-options-grid">
          {/* Donation Option 1 */}
          <Grid item xs={12} sm={6} md={6}>
            <Paper className="giving-card">
              <Box className="giving-content">
                <Typography variant="h5" component="h3" className="giving-card-title">
                  Give via QR Code
                </Typography>
                <Typography variant="body1" className="giving-card-text">
                  Scan the QR code with your mobile device to make a quick and secure donation.
                </Typography>
              </Box>
              <Box className="giving-image-container">
                <img src={process.env.PUBLIC_URL + '/images/qrcode.jpg'} alt="QR Code" className="giving-image" />
              </Box>
            </Paper>
          </Grid>

          {/* Donation Option 2 */}
          <Grid item xs={12} sm={6} md={6}>
            <Paper className="giving-card">
              <Box className="giving-content">
                <Typography variant="h5" component="h3" className="giving-card-title">
                  Mail-In Donation
                </Typography>
                <Typography variant="body1" className="giving-card-text">
                  Prefer to send a check? Mail your donation to our office address.
                </Typography>
                <Button variant="contained" color="primary" className="giving-button" onClick={handleGetAddressClick}>
                  Get Address
                </Button>
                {showAddress && (
                  <Box className="address-box">
                    <Typography variant="body2" className="address-text">
                      The address for mail-in checks, payable to Heart for Malawi, can be sent to:
                      <br />
                      7402 N 400 E, North Manchester, IN 46962
                      <br />
                      <a href="mailto:info@heartformalawi.org">info@heartformalawi.org</a>
                    </Typography>
                    <IconButton onClick={handleCopyToClipboard} className="copy-button">
                      <ContentCopyIcon />
                    </IconButton>
                  </Box>
                )}
              </Box>
              <Box className="giving-image-container">
                <img src={process.env.PUBLIC_URL + '/images/four.jpeg'} alt="Mail-In Donation" className="giving-image" />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
