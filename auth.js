// Simple API key auth for demo purposes
const validApiKeys = {
  'sk_live_123456': 'Moldex-Metric IC',
  'sk_test_abcdef': 'Demo Customer'
};

function checkApiKey(key) {
  return key in validApiKeys;
}

module.exports = { checkApiKey };
