const express = require('express');
const router = express.Router();
const { fetchOperatingIncome, fetchNetIncome } = require('../services/secApi');

router.get('/data', async (req, res) => {
  try {
    const [operatingIncomeResponse, netIncomeResponse] = await Promise.all([
      fetchOperatingIncome(),
      fetchNetIncome()
    ]);

    res.json({
      operatingIncome: operatingIncomeResponse.data,
      netIncome: netIncomeResponse.data,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(error.response?.status || 500).json({
      error: 'Error fetching data from SEC EDGAR API',
      details: error.message
    });
  }
});

module.exports = router;