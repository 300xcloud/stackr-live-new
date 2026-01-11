// Simple in-memory audit log for demo purposes
const auditLog = [];

function logDecision(request, decision, apiKey) {
  const entry = {
    timestamp: new Date().toISOString(),
    apiKey,
    request,
    decision
  };
  auditLog.push(entry);
  console.log('Audit Log:', entry);
}

module.exports = { logDecision };
