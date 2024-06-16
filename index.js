const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Endpoint to get the transcript
app.get('/transcript', async (req, res) => {
  const videoUrl = req.query.url;

  if (!videoUrl) {
    return res.status(400).send({ error: 'URL is required' });
  }

  try {
    const transcript = await extractTranscriptFromYouTube(videoUrl);
    res.status(200).send({ transcript });
  } catch (error) {
    res.status(500).send({ error: 'Failed to extract transcript' });
  }
});

const extractTranscriptFromYouTube = async (url) => {
  // Implement the logic to extract the transcript from the YouTube video
  return 'This is a sample transcript.';
};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
