import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import './projects.css';

const projects = [
  {
    title: 'Orphan Care',
    description: 'Providing care and support for orphans is at the heart of our mission. In Malawi, we strive to offer a safe and nurturing environment for vulnerable children. Our orphan program focuses on not only meeting the basic needs of food, shelter, and clothing but also providing educational, spiritual, and emotional mentoring and support. We believe that every child deserves the opportunity to grow in a Godly, loving environment, where they can thrive and develop into responsible and empowered members of society.',
    image: process.env.PUBLIC_URL + '/images/five.jpeg',
  },
  {
    title: 'Grace of God Food Ministries',
    description: 'Grace of God Food Ministries is dedicated to nurturing the most vulnerable children in rural Malawi. Our orphanage program is designed to provide a stable and loving home for children who have lost their parents. We focus on creating a community that supports the holistic development of each child, offering not only essential resources like food and shelter but also education, mentorship, and emotional care. Through this program, we aim to instill hope and foster resilience, helping these children to grow into confident and capable individuals who can contribute positively to their communities.',
    image: process.env.PUBLIC_URL + '/images/four.jpeg',
  },
  {
    title: 'Community Health Outreach',
    description: 'Our community health outreach programs aim to improve the health and well-being of rural communities by providing essential medical services and health education. The program focuses on preventive healthcare, maternal and child health, and managing common diseases in Malawi.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
  {
    title: 'The Farm - Sustainable Agriculture Initiatives and Church Planting',
    description: 'This project promotes sustainable agricultural practices among rural farmers in Malawi. By providing training and resources, we help farmers increase crop yields, improve soil health, and adopt environmentally friendly farming techniques. The Farm is also looking to plant a church on the grounds.',
    image: process.env.PUBLIC_URL + '/images/two.jpeg',
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

const Projects = () => {
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
    </div>
  );
};

export default Projects;
