const express = require('express');
const rateLimiter = require('./middleware/rateLimiter');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));

// Apply rate limiting to all routes
app.use(rateLimiter);

// Routes
app.use('/', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});