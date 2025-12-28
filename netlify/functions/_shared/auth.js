const jwt = require('jsonwebtoken');

function getUserIdFromHeader(headers) {
  const auth = headers['authorization'] || headers['Authorization'];
  if (!auth) return null;
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload.sub || payload.user_id || payload.uid || null;
  } catch {
    return null;
  }
}

module.exports = { getUserIdFromHeader };
