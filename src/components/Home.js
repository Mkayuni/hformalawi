import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import './home.css';

const initiatives = [
  {
    title: 'Education for All',
    image: '/images/education.jpeg', // Correct path for the image
    description: 'Providing access to quality education and resources to empower the youth of Malawi.',
  },
  {
    title: 'Healthcare Improvements',
    image: '/public/images/healthcare.jpg',
    description: 'Enhancing healthcare facilities and access to ensure a healthier community.',
  },
  {
    title: 'Agriculture Development',
    image: '/public/images/agriculture.jpg',
    description: 'Promoting sustainable farming practices and improving food security.',
  },
  {
    title: 'Clean Water Access',
    image: '/public/images/water.jpg',
    description: 'Ensuring access to clean and safe drinking water for all communities.',
  },
  {
    title: 'Women Empowerment',
    image: '/public/images/women.jpg',
    description: 'Empowering women through education, skill development, and entrepreneurship.',
  },
  {
    title: 'Environmental Conservation',
    image: '/public/images/environment.jpg',
    description: 'Protecting natural resources and promoting environmental sustainability.',
  },
];

const Home = () => {
  return (
    <div className="home-wrapper">
      <Box textAlign="center" className="hero-container">
        <Box className="intro-container">
          <Typography variant="h2" component="h1" gutterBottom className="title">
            Welcome to Heart for Malawi
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            className="subtitle"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            Empowering and transforming communities in Malawi through integrated and sustainable development programs
          </Typography>
          <Button variant="contained" color="primary" className="explore-button" href="#initiatives">
            Explore Our Work
          </Button>
        </Box>
      </Box>
      <Container my={6}>
        <Typography variant="h4" component="h2" gutterBottom className="section-title">
          Our Initiatives
        </Typography>
        <Grid container spacing={4} justifyContent="center" className="initiatives-container">
          {initiatives.map((initiative, index) => (
            <Grid item xs={12} sm={6} md={6} key={index} className="initiative">
              <Box className="image-container">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="rectangular-image"
                />
                <Typography variant="h6" className="image-description">
                  {initiative.title}
                </Typography>
                <Typography variant="body2" className="image-text">
                  {initiative.description}
                </Typography>
                <Button variant="outlined" color="primary" className="learn-more-button">
                  Learn More
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
