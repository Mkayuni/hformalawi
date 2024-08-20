import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './footer.css';

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        textAlign: 'center',
        borderTop: 'none',
      }}
    >
      <Box className="footer-content">
        <a href="https://www.instagram.com/heartformalawi/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/images/insta.png'} alt="Instagram" width="45" height="45" style={{ margin: '0 10px' }} />
        </a>
        <a href="https://www.facebook.com/www.heartformalawi.org/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + '/images/facebool.png'} alt="Facebook" width="45" height="45" style={{ margin: '0 10px' }} />
        </a>
      </Box>
      <Typography variant="body2" className="copyright" sx={{ color: isDarkMode ? '#fff' : '#000' }}>
        &copy; 2024 Heart for Malawi. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
