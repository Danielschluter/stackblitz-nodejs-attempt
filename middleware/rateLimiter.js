const { RATE_LIMIT, QUEUE_INTERVAL } = require('../config/constants');

const requestQueue = [];

// Process the queue every second
setInterval(() => {
  const now = Date.now();
  while (requestQueue.length > 0 && requestQueue[0] <= now - QUEUE_INTERVAL) {
    requestQueue.shift();
  }
}, QUEUE_INTERVAL);

// Rate limiting middleware
const rateLimiter = async (req, res, next) => {
  if (requestQueue.length >= RATE_LIMIT) {
    const oldestRequest = requestQueue[0];
    const now = Date.now();
    if (now - oldestRequest < QUEUE_INTERVAL) {
      return res.status(429).json({
        error: 'Too many requests. Please try again later.'
      });
    }
    requestQueue.shift();
  }
  requestQueue.push(Date.now());
  next();
};

module.exports = rateLimiter;