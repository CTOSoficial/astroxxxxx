const pool = require('./_shared/db');
const { getUserIdFromHeader } = require('./_shared/auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') return { statusCode: 405 };

  const userId = getUserIdFromHeader(event.headers);
  if (!userId) return { statusCode: 401 };

  const res = await pool.query(
    'SELECT game_id, created_at FROM wishlists WHERE user_id=$1',
    [userId]
  );

  return { statusCode: 200, body: JSON.stringify(res.rows) };
};
