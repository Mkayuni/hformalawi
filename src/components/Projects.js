import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import './projects.css';

const projects = [
  {
    title: 'Orphan Care',
    description: 'Providing care and support for orphans is at the heart of our mission. In Malawi, we strive to offer a safe and nurturing environment for vulnerable children. Our orphan program focuses on not only meeting the basic needs of food, shelter, and clothing but also providing educational, spiritual, and emotional mentoring and support. We believe that every child deserves the opportunity to grow in a Godly, loving environment, where they can thrive and develop into responsible and empowered members of society.',
    image: process.env.PUBLIC_URL + '/images/five.jpeg',
  },
  {
    title: 'The Farm - Sustainable Agriculture Initiatives and Church Planting',
    description: 'This project promotes sustainable agricultural practices among rural farmers in Malawi. By providing training and resources, we help farmers increase crop yields, improve soil health, and adopt environmentally friendly farming techniques. The Farm is also looking to plant a church on the grounds.',
    image: process.env.PUBLIC_URL + '/images/tse.jpeg',
  },
];

const ProjectCard = ({ project }) => (
  <Paper className="project-card">
    <Box className="project-content">
      <Typography variant="h4" component="h3" className="project-title">
        {project.title}
      </Typography>
      <Typography variant="body2" className="project-description">
        {project.description}
      </Typography>
    </Box>
    <Box className="project-image-container">
      <img src={project.image} alt={project.title} className="project-image" />
    </Box>
  </Paper>
);

const GalleryCard = ({ image }) => (
  <Box className="gallery-image-container">
    <img src={image} alt="Gallery" className="gallery-image" />
  </Box>
);

const Projects = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    // Fetch the list of images from the backend
    fetch('/api/images')
      .then(response => response.json())
      .then(data => {
        const imageUrls = data.map(fileName => `/gallery/${fileName}`);
        console.log(imageUrls); // Log URLs to console
        setGalleryImages(imageUrls);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="projects-wrapper">
      {/* Introductory Section */}
      <Box className="projects-hero-container">
        <Box className="projects-intro-container">
          <Typography variant="h2" component="h2" className="projects-hero-title">
            Our Works
          </Typography>
        </Box>
      </Box>

      {/* Projects Section */}
      <Container className="projects-container">
        <Grid container spacing={6} className="projects-grid">
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Gallery Section */}
      <Container className="gallery-container">
        <Typography variant="h4" component="h3" className="gallery-title">
          Gallery
        </Typography>
        <Grid container spacing={4}>
          {galleryImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <GalleryCard image={image} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
