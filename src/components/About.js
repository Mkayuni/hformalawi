import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import './about.css';

const boardMembers = [
  {
    name: 'Jacenta',
    title: 'Founder & Director',
    introduction: 'Jacenta is the visionary behind Grace of Good Food Ministries. With a passion for serving vulnerable communities, She has dedicated her life to creating sustainable programs that provide nourishment and hope to those in need.',
    image: '/images/five.jpeg',
  },
  {
    name: 'Carol Collett',
    title: 'Executive Director',
    introduction: 'Carol Collett brings decades of experience in nonprofit management to the board. Her strategic vision and leadership have been instrumental in expanding the reach of Grace of Good Food Ministries.',
    image: '/images/four.jpeg',
  },
  {
    name: 'Kirk Belmont',
    title: 'Treasurer',
    introduction: 'Kirk Belmont is a seasoned financial expert with a heart for philanthropy. As the Treasurer of the board, Kirk oversees the financial health of Grace of Good Food Ministries.',
    image: '/images/three.jpeg',
  },
];

const staffMembers = [
  {
    name: 'Moses Kayuni',
    title: 'Community Outreach Coordinator',
    introduction: 'Moses Kayuni is a community organizer with a deep understanding of the challenges faced by rural communities. His work with local leaders has been crucial in building trust and ensuring the success of the ministry’s outreach programs.',
    image: '/images/two.jpeg',
  },
  {
    name: 'Maro Chirwa',
    title: 'Health Program Manager',
    introduction: 'Maro Chirwa is a healthcare professional with a focus on public health. Maro advocates for the health and well-being of the children and families served by Grace of Good Food Ministries.',
    image: '/images/one.jpeg',
  },
  {
    name: 'Grace Mwale',
    title: 'Program Coordinator',
    introduction: 'Grace Mwale oversees the implementation of various programs at Grace of Good Food Ministries. Her dedication to improving the lives of children in need is unparalleled.',
    image: '/images/three.jpeg',
  },
];

const volunteers = [
  {
    name: 'John Doe',
    title: 'Volunteer Teacher',
    introduction: 'John Doe has been volunteering as a teacher at our organization, where he passionately educates children, helping them realize their potential through education.',
    image: '/images/two.jpeg',
  },
  {
    name: 'Jane Smith',
    title: 'Healthcare Volunteer',
    introduction: 'Jane Smith provides invaluable support to our healthcare initiatives, bringing her expertise in nursing to ensure the well-being of the communities we serve.',
    image: '/images/one.jpeg',
  },
  {
    name: 'Emily Johnson',
    title: 'Community Support Volunteer',
    introduction: 'Emily Johnson assists in community outreach, ensuring that the voices of the most vulnerable are heard and that they receive the support they need.',
    image: '/images/five.jpeg',
  },
];

const About = () => {
  return (
    <div className="about-wrapper">
      {/* Introductory Section */}
      <Box className="about-hero-container">
        <Box className="about-intro-container">
          <Typography variant="h2" component="h2" className="intro-title">
            Meet the Team
          </Typography>
          <Typography variant="body1" className="intro-description">
            Our dynamic and diverse team consists of a multinational group of volunteers and paid staff. Grace of Good Food Ministries works with an incredible group of talented, passionate people who are devoted to the cause. We want to see more enthusiastic people develop their skills, helping others, and making a difference in the local community.
          </Typography>
        </Box>
      </Box>

      {/* Board Members Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Board of Trustees
        </Typography>
        <Grid container spacing={4} className="team-grid">
          {boardMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index} className="team-member">
              <Box className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <Box className="team-content">
                  <Typography variant="h5" component="h3" className="team-name">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className="team-title">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" className="team-introduction">
                    {member.introduction}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Staff Members Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Our Dedicated Staff
        </Typography>
        <Grid container spacing={4} className="team-grid">
          {staffMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index} className="team-member">
              <Box className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <Box className="team-content">
                  <Typography variant="h5" component="h3" className="team-name">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className="team-title">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" className="team-introduction">
                    {member.introduction}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Volunteers Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Our Passionate Volunteers
        </Typography>
        <Grid container spacing={4} className="team-grid">
          {volunteers.map((member, index) => (
            <Grid item xs={12} md={4} key={index} className="team-member">
              <Box className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <Box className="team-content">
                  <Typography variant="h5" component="h3" className="team-name">
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle1" className="team-title">
                    {member.title}
                  </Typography>
                  <Typography variant="body2" className="team-introduction">
                    {member.introduction}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
