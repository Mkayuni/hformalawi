import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import './about.css';

const boardMembers = [
  {
    name: 'Jacenta',
    title: 'President',
    introduction: 'Jacenta is the visionary behind Grace of Good Food Ministries. With a passion for serving vulnerable communities, she has dedicated her life to creating sustainable programs that provide nourishment and hope to those in need.',
    image: process.env.PUBLIC_URL + '/images/five.jpeg',
  },
  {
    name: 'Carol Collett',
    title: 'Vice President',
    introduction: 'Carol Collett brings decades of experience in nonprofit management to the board. Her strategic vision and leadership have been instrumental in expanding the reach of Grace of Good Food Ministries.',
    image: process.env.PUBLIC_URL + '/images/four.jpeg',
  },
  {
    name: 'Kirk Belmont',
    title: 'Treasurer',
    introduction: 'Kirk Belmont is a seasoned financial expert with a heart for philanthropy. As the Treasurer of the board, Kirk oversees the financial health of Grace of Good Food Ministries.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
  {
    name: 'Moses Kayuni',
    title: 'Community Outreach Coordinator',
    introduction: 'Moses Kayuni is a community organizer with a deep understanding of the challenges faced by rural communities. His work with local leaders has been crucial in building trust and ensuring the success of the ministry’s outreach programs.',
    image: process.env.PUBLIC_URL + '/images/two.jpeg',
  },
];

const staffMembers = [
  {
    name: 'Titu & Shupi Chirwa',
    title: 'Program Coordinator',
    introduction: 'Director and Administrator at Grace of God Ministries - Titu co-founded Grace of God in 2015 with a few other volunteers. Together, they have a passion for the village in and around Grace of God. Titu is currently a children’s pastor at Capital City Baptist Church and Shupi has a sewing business. Titu and Shupi have four beautiful children: Amanda, Micah, Christine and Caleb.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
  {
    name: 'Agness',
    title: 'Teacher at Grace of God Ministries',
    introduction: 'Agness has been teaching for four years and is the mom to two young boys. She dedicates her time to teaching standards 1 –3 and is passionate about English. She also teaches a preschool class in the morning.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
  {
    name: 'Alinafe',
    title: 'Teacher at Grace of God Ministries',
    introduction: 'Alinafe has been a teacher at Grace of God for three years, teaching on and off. She is currently in college and will graduate next semester. Her degree will be in agriculture but she is gifted at teaching as well. Her focus is teaching math.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
  {
    name: 'Chifundo',
    title: 'Teacher at Grace of God Ministries',
    introduction: 'Teacher at Grace of God Ministries - Chifundo is the lead preschool teacher and has been at Grace of God for 3 years. She is the mom to two young children and enjoys spending time with her husband and family.',
    image: process.env.PUBLIC_URL + '/images/three.jpeg',
  },
];

const volunteers = [
  {
    name: 'Maro Chirwa',
    title: 'Heart for the Nations Board Member',
    introduction: 'Maro is passionate about community outreach, mentorship, youth empowerment and leadership.',
    image: process.env.PUBLIC_URL + '/images/one.jpeg',
  },
  {
    name: 'Amy Collett',
    title: 'Educational Coordinator - Grace of God Ministries',
    introduction: 'Amy has spent her last 5 years developing the preschool and supervising the implementation of educational and spiritual activities. She also is involved in village outreach, building relationships with the children and working with adults. She also volunteers with her local church. "Most people come to Malawi for the first time and only sees poverty. After living here for several years, I don\'t see it that way. I see some of the most powerful, strong and resilient people I have ever met. Where they see poverty, I see power."',
    image: process.env.PUBLIC_URL + '/images/two.jpeg',
  },
  {
    name: 'Hannah Schwering',
    title: 'Educational Coordinator - Grace of God Ministries',
    introduction: 'Hannah is new to the crew, just arriving in June 2024. Hannah is passionate about helping the older kids at Grace realize their potential to lead and serve Jesus. She would love to start a program that caters to our big kids and equips them for the real world, whether that is a mentorship program or just giving them opportunities to lead at Grace.',
    image: process.env.PUBLIC_URL + '/images/one.jpeg',
  },
  {
    name: 'Martha Chirwa',
    title: 'Chimvite School Liaison',
    introduction: 'Martha and her late husband, Akim, partnered with our founder to begin work in Malawi. Akim was a pastor and together they shared a vision to have land and a church plant in Malawi. Martha works passionately to help anywhere needed with Heart for Malawi and visits the school in Chimvite to locate the most vulnerable children to provide help for.',
    image: process.env.PUBLIC_URL + '/images/one.jpeg',
  },
];

const MemberCard = ({ member }) => (
  <Paper className="team-card">
    <Box className="team-image-container">
      <img src={member.image} alt={member.name} className="team-image" />
      <Box className="team-overlay">
        <Typography variant="h5" component="h3" className="team-name">
          {member.name}
        </Typography>
        <Typography variant="subtitle1" className="team-title">
          {member.title}
        </Typography>
      </Box>
    </Box>
    <Box className="team-content">
      <Typography variant="body2" className="team-introduction">
        {member.introduction}
      </Typography>
    </Box>
  </Paper>
);

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
            Our dynamic and diverse team consists of a multinational group of volunteers and paid staff, dedicated to making a positive impact in our community.
          </Typography>
        </Box>
      </Box>

      {/* Board Members Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Board of Trustees
        </Typography>
        <Grid container spacing={6} className="team-grid">
          {boardMembers.map((member, index) => (
            <Grid item xs={12} key={index}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Staff Members Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Our Dedicated Staff
        </Typography>
        <Grid container spacing={6} className="team-grid">
          {staffMembers.map((member, index) => (
            <Grid item xs={12} key={index}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Volunteers Section */}
      <Container>
        <Typography variant="h3" component="h3" className="section-title">
          Our Passionate Volunteers
        </Typography>
        <Grid container spacing={6} className="team-grid">
          {volunteers.map((member, index) => (
            <Grid item xs={12} key={index}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default About;
