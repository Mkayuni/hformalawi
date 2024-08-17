import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import './projects.css';

const projects = [
  {
    title: 'Orphanage Care',
    description: '"Providing care and support for orphans is at the heart of our mission. In Malawi, we strive to offer a safe and nurturing environment for vulnerable children. Our orphanage program focuses on not only meeting the basic needs of food, shelter, and clothing but also providing education and emotional support. We believe that every child deserves the opportunity to grow in a loving environment, where they can thrive and develop into responsible and empowered members of society.',
    image: '/images/five.jpeg',
  },
  {
    title: 'Grace of God Food Ministries',
    description: 'Grace of Good Food Ministries is dedicated to nurturing the most vulnerable children in rural Malawi. Our orphanage program is designed to provide a stable and loving home for children who have lost their parents. We focus on creating a community that supports the holistic development of each child, offering not only essential resources like food and shelter but also education, mentorship, and emotional care. Through this program, we aim to instill hope and foster resilience, helping these children to grow into confident and capable individuals who can contribute positively to their communities.',
    image: '/images/four.jpeg',
  },
  {
    title: 'Community Health Outreach',
    description: 'Our community health outreach programs aim to improve the health and well-being of rural communities by providing essential medical services and health education. The program focuses on preventive healthcare, maternal and child health, and managing common diseases in Malawi.',
    image: '/images/three.jpeg',
  },
  {
    title: 'Sustainable Agriculture Initiatives',
    description: 'This project promotes sustainable agricultural practices among rural farmers in Malawi. By providing training and resources, we help farmers increase crop yields, improve soil health, and adopt environmentally friendly farming techniques.',
    image: '/images/two.jpeg',
  },
  {
    title: 'Water and Sanitation Program',
    description: 'The Water and Sanitation Program focuses on providing clean water and improved sanitation facilities to rural communities. The program includes constructing wells, installing water purification systems, and educating communities about hygiene practices.',
    image: '/images/one.jpeg',
  },
];

const Projects = () => {
  return (
    <div className="projects-wrapper">
      {/* Header Image Section */}
      <Box className="projects-hero-container">
        <Box className="projects-intro-container">
          <Typography variant="h1" component="h1">
            Our Works
          </Typography>
        </Box>
      </Box>

      {/* Projects Section */}
      <Container>
        {projects.map((project, index) => (
          <Box key={index} className="project-item" my={4}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <Box className="project-content">
              <Typography
                variant="h4"
                component="h3"
                gutterBottom
                className="project-title"
              >
                {project.title}
              </Typography>
              <Typography
                variant="body1"
                className="project-description"
              >
                {project.description}
              </Typography>
            </Box>
            {index < projects.length - 1 && <Divider />} {/* Add a divider between projects except the last one */}
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
