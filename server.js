const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Basic API for job listings
app.get('/api/jobs', (req, res) => {
  res.json([
    { id: 1, title: 'Software Engineer', location: 'Remote' },
    { id: 2, title: 'Product Manager', location: 'New York' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
