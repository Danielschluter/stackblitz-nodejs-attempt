const axios = require('axios');
const { SEC_HEADERS } = require('../config/constants');

// Configure axios defaults
Object.entries(SEC_HEADERS).forEach(([key, value]) => {
  axios.defaults.headers.common[key] = value;
});

async function fetchOperatingIncome() {
  return axios.get(
    'https://data.sec.gov/api/xbrl/frames/us-gaap/OperatingIncomeLoss/USD/CY2023.json'
  );
}

async function fetchNetIncome() {
  return axios.get(
    'https://data.sec.gov/api/xbrl/frames/us-gaap/NetIncomeLoss/USD/CY2023.json'
  );
}

module.exports = {
  fetchOperatingIncome,
  fetchNetIncome
};