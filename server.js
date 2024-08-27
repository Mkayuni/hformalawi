const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Set Content Security Policy headers
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' http://localhost:3001 https://i.postimg.cc/ data:; script-src 'self'; style-src 'self' 'unsafe-inline';");
  next();
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files (images) from the "public/gallery" directory
app.use('/gallery', express.static(path.join(__dirname, 'public/gallery')));

// Endpoint to get all images from the gallery folder
app.get('/api/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'public/gallery');
  
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Unable to scan directory:', err);
      return res.status(500).send('Unable to scan directory');
    }
    
    // Filter files to include only images
    const imageFiles = files.filter(file => 
      ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );
    
    res.json(imageFiles);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
