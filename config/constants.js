// API rate limiting constants
exports.RATE_LIMIT = 10; // requests per second
exports.QUEUE_INTERVAL = 1000; // 1 second in milliseconds

// SEC EDGAR API headers
exports.SEC_HEADERS = {
  'User-Agent': 'Sample Company Name AdminContact@<sample company domain>.com',
  'Accept-Encoding': 'gzip, deflate'
};