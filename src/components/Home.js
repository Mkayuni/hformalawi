import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import './home.css';

const Home = ({ toggleSection }) => {
  const [showFullStory, setShowFullStory] = useState(false);

  const toggleStory = () => {
    setShowFullStory(!showFullStory);
  };

  const handleSubscribeClick = () => {
    const emailBody = `If you would like to join our monthly newsletter list to receive updates, please provide your desired email address here and click send. If the email address this link directed you to is correct, simply click send.`;
    window.location.href = `mailto:info@heartformalawi.org?subject=Subscribe to Newsletter&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <Box textAlign="center" className="hero-container">
        <Box className="intro-container">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: '#2c3e50 !important', fontWeight: 'bold' }}
          >
            Welcome to Heart for Malawi Ministries!
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: '#2c3e50 !important', fontWeight: 'bold' }}
          >
            Empowering and transforming communities through faith and action
          </Typography>

          {/* Explore Our Works Section */}
          <Box className="explore-section">
            <Typography
              variant="body1"
              className="explore-link"
              onClick={() => toggleSection('projects')}
            >
              Explore Our Works
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Our Story Section */}
      <Container className="our-story-section">
        <Typography variant="h3" component="h3" className="our-story-title">
          Our Story
        </Typography>
        <Typography variant="h5" component="h4" className="scripture-text">
          "For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in, I needed clothes and you clothed me, I was sick and you looked after me, I was in prison and you came to visit me... Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me."
        </Typography>
        <Typography variant="h6" component="p" className="scripture-reference">
          Matthew 25:35-36, 40 (NIV)
        </Typography>
        <Box className="story-content">
          <Box className="fancy-box">
            <Typography variant="body1" className="story-text">
              {showFullStory
                ? "Heart for Malawi was founded with the mission to bring hope and change to communities in need. Through our programs, we aim to provide education, health services, and spiritual guidance to those who need it most. Our story is one of faith, dedication, and a relentless pursuit of a better future for the vulnerable. We started our journey in a small village, where we saw the need for community support and spiritual guidance. Over the years, we have grown into a ministry that touches the lives of many, offering not just material assistance, but also the love and support that comes from a community grounded in faith."
                : "Heart for Malawi was founded with the mission to bring hope and change to communities in need. Through our programs, we aim to provide education, health services, and spiritual guidance to those who need it most. Our story is one of faith, dedication, and a relentless pursuit of a better future for the vulnerable."
              }
            </Typography>
            <Button className="read-more-btn" onClick={toggleStory}>
              {showFullStory ? "Read Less" : "Read More"}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Vision and Mission Section */}
      <Box textAlign="center" className="vision-mission-section">
        <Box className="vision-mission-container">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="vision-mission-border">
              <Typography variant="h4" className="vision-mission-title">
                Our Vision
              </Typography>
              <Typography variant="body1" className="vision-mission-text">
                To see transformed communities where the love of Christ is demonstrated through practical help.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="vision-mission-border">
              <Typography variant="h4" className="vision-mission-title">
                Our Mission
              </Typography>
              <Typography variant="body1" className="vision-mission-text">
                To serve the most vulnerable through faith-driven action, providing support in education, health, and spiritual care.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Newsletter Section */}
      <Container className="newsletter-section">
        <Typography variant="h4" component="h3" className="newsletter-title">
          Newsletter
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#0066ff',
            fontWeight: 'bold',
            fontSize: '1.5rem',
            cursor: 'pointer',
            display: 'inline-block',
            borderBottom: '2px solid #0066ff',
            paddingBottom: '2px',
          }}
          onClick={handleSubscribeClick}
        >
          Subscribe to our Newsletter
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
