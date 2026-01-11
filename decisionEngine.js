function applyDecision(request, policy) {
  const { type, amount, days_since_purchase, list_price } = request;
  let decision = 'deny';
  if (type === 'refund') {
    if (amount <= policy.refund.max_amount && days_since_purchase <= policy.refund.max_days) {
      decision = 'approve';
    } else {
      decision = 'escalate';
    }
  } else if (type === 'discount') {
    const percent = (amount / list_price) * 100;
    if (amount <= policy.discount.max_amount && percent <= policy.discount.max_percent) {
      decision = 'approve';
    } else {
      decision = 'escalate';
    }
  }
  return { decision, policy_version: policy.version, confidence: 0.95 };
}

module.exports = { applyDecision };
