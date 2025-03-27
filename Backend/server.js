const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Path to the data.js file
const dataFilePath = path.join(__dirname, 'data.js');


function readData() {
  try {
    // Clear the require cache for data.js
    delete require.cache[require.resolve('./data.js')];
    const videos = require('./data.js');
    return videos;
  } catch (err) {
    console.error('Error reading data:', err);
    return [];
  }
}

/**
 * Helper function to write data to data.js.
 * It writes the updated array as a valid JavaScript file.
 */
function writeData(data) {
  const fileContent =
    'const videos = ' + JSON.stringify(data, null, 2) + ';\n\nmodule.exports = videos;\n';
  fs.writeFileSync(dataFilePath, fileContent, 'utf8');
}

// GET API - Retrieve all videos
app.get('/api/videos', (req, res) => {
  const videos = readData();
  res.json(videos);
});

// POST API - Add a new video
app.post('/api/videos', (req, res) => {
    const videos = readData();
    const { title, image, description, videoUrl, locationUrl } = req.body;
  
    // Validate required fields: all must be provided and non-empty
    if (!title || !image || !description || !videoUrl || !locationUrl) {
      return res.status(400).json({ message: 'Missing required fields!' });
    }
  
    // Automatically assign a unique ID
    const newId = videos.length ? Math.max(...videos.map(v => v.id)) + 1 : 1;
    const newVideo = { id: newId, title, image, description, videoUrl, locationUrl };
  
    // Add the new video to the array and write back to file
    videos.push(newVideo);
    writeData(videos);
  
    res.status(201).json({ message: 'New video added successfully!', data: newVideo });
  });
  
  

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
