const pool = require('./_shared/db');
const { getUserIdFromHeader } = require('./_shared/auth');

exports.handler = async (event) => {
  if (event.httpMethod !== 'DELETE') return { statusCode: 405 };

  const userId = getUserIdFromHeader(event.headers);
  if (!userId) return { statusCode: 401 };

  const { gameId } = JSON.parse(event.body);

  await pool.query(
    'DELETE FROM wishlists WHERE user_id=$1 AND game_id=$2',
    [userId, gameId]
  );

  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
