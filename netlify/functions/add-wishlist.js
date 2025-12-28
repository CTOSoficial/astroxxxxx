const pool = require('./_shared/db');
const { getUserIdFromHeader } = require('./_shared/auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405 };

  const userId = getUserIdFromHeader(event.headers);
  if (!userId) return { statusCode: 401 };

  const { gameId } = JSON.parse(event.body);

  await pool.query(
    'INSERT INTO wishlists(user_id, game_id) VALUES($1,$2) ON CONFLICT DO NOTHING',
    [userId, gameId]
  );

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
