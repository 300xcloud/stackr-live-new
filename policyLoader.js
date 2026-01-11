// Loads policies per API key
const policies = {
  'sk_live_123456': {
    version: 'v1',
    refund: { max_amount: 500, max_days: 90 },
    discount: { max_amount: 200, max_percent: 20 }
  },
  'sk_test_abcdef': {
    version: 'v1',
    refund: { max_amount: 1000, max_days: 60 },
    discount: { max_amount: 150, max_percent: 15 }
  }
};

function loadPolicy(apiKey) {
  return policies[apiKey] || { version: 'v1', refund: {}, discount: {} };
}

module.exports = { loadPolicy };
