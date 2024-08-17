import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import './contact.css';

const Contact = () => {
  return (
    <div className="giving-container">
      {/* Fancy Background Section */}
      <Box className="giving-background-section">
        <Container>
          <Typography variant="h4" component="h3" className="giving-background-text">
            "Every gift, no matter the size, helps us bring hope and healing to those in need."
          </Typography>
        </Container>
      </Box>

      {/* Giving Section Header */}
      <Box className="giving-header">
        <Typography variant="h2" component="h2" className="giving-title">
          Support Our Mission
        </Typography>
        <Container>
          <Typography variant="h6" component="p" className="giving-subtitle">
            Your generosity enables us to continue our work and make a lasting impact in the communities we serve.
          </Typography>
        </Container>
      </Box>

      {/* Giving Options */}
      <Container className="giving-options">
        <Grid container spacing={4} justifyContent="center">
          {/* Donation Option 1 */}
          <Grid item xs={12} md={4}>
            <Box className="giving-card">
              <img src="/images/qrcode.jpg" alt="QR Code" className="giving-image" />
              <Typography variant="h5" component="h3" className="giving-card-title">
                Give via QR Code
              </Typography>
              <Typography variant="body1" className="giving-card-text">
                Scan the QR code with your mobile device to make a quick and secure donation.
              </Typography>
            </Box>
          </Grid>

          {/* Donation Option 2 */}
          <Grid item xs={12} md={4}>
            <Box className="giving-card">
              <img src="/images/five.jpeg" alt="Online Giving" className="giving-image" />
              <Typography variant="h5" component="h3" className="giving-card-title">
                Online Giving
              </Typography>
              <Typography variant="body1" className="giving-card-text">
                Use our online platform to make a donation with your credit card or PayPal.
              </Typography>
              <Button variant="contained" color="primary" className="giving-button">
                Donate Now
              </Button>
            </Box>
          </Grid>

          {/* Donation Option 3 */}
          <Grid item xs={12} md={4}>
            <Box className="giving-card">
              <img src="/images/four.jpeg" alt="Mail-In Donation" className="giving-image" />
              <Typography variant="h5" component="h3" className="giving-card-title">
                Mail-In Donation
              </Typography>
              <Typography variant="body1" className="giving-card-text">
                Prefer to send a check? Mail your donation to our office address.
              </Typography>
              <Button variant="contained" color="primary" className="giving-button">
                Get Address
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
