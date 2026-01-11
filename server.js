const express = require('express');
const bodyParser = require('body-parser');
const { checkApiKey } = require('./auth');
const { loadPolicy } = require('./policyLoader');
const { applyDecision } = require('./decisionEngine');
const { logDecision } = require('./auditLogger');

const app = express();
app.use(bodyParser.json());

app.post('/decision', async (req, res) => {
  try {
    const apiKey = req.headers['authorization']?.split(' ')[1];
    if (!checkApiKey(apiKey)) return res.status(401).json({ error: 'Invalid API key' });

    const policy = loadPolicy(apiKey);
    const decision = applyDecision(req.body, policy);
    logDecision(req.body, decision, apiKey);

    res.json(decision);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
const express = require("express");
const app = express();

// ✅ PUT ROUTES HERE
app.get("/", (req, res) => {
  res.json({ status: "Stackr is live 🚀" });
});

// other routes like /decision can go here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Stackr running on port ${PORT}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Stackr running on port ${PORT}`));

