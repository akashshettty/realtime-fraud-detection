const express = require('express');
const yahooFinance = require('yahoo-finance2').default;
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());

// Proxy endpoint: /api/yahoo?symbol=TCS.NS
app.get('/api/yahoo', async (req, res) => {
  const symbol = req.query.symbol || 'TCS.NS';
  try {
    const quote = await yahooFinance.quote(symbol);
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
