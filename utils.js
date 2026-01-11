// Helpers and validation
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function validateRequest(request) {
  const { type, amount } = request;
  if (!['refund', 'discount'].includes(type)) throw new Error('Invalid type');
  if (!isNumber(amount)) throw new Error('Amount must be a number');
}

module.exports = { isNumber, validateRequest };
